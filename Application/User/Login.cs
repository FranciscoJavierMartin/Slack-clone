using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace Application.User
{
  public class Login
  {
    public class Query : IRequest<User>
    {
      public string Email { get; set; }
      public string Password { get; set; }
    }

    public class QueryValidator : AbstractValidator<Query>
    {
      public QueryValidator()
      {
        RuleFor(x => x.Email).NotEmpty().EmailAddress();
        RuleFor(x => x.Password).NotEmpty();
      }
    }

    public class Handler : IRequestHandler<Query, User>
    {
      private readonly UserManager<AppUser> userManager;
      private readonly SignInManager<AppUser> signInManager;
      private readonly IJwtGenerator jwtGenerator;

      public Handler(UserManager<AppUser> userManager,
        SignInManager<AppUser> signInManager,
        IJwtGenerator jwtGenerator)
      {
        this.userManager = userManager;
        this.signInManager = signInManager;
        this.jwtGenerator = jwtGenerator;
      }

      public async Task<User> Handle(Query request, CancellationToken cancellationToken)
      {
        var user = await userManager.FindByEmailAsync(request.Email);

        if (user == null)
        {
          throw new RestException(HttpStatusCode.Unauthorized);
        }

        var result = await signInManager.CheckPasswordSignInAsync(user, request.Password, false);

        return result.Succeeded
          ? new User { 
              Token = jwtGenerator.CreateToken(user), 
              UserName = user.UserName, 
              Email = user.Email 
            }
          : throw new RestException(HttpStatusCode.Unauthorized);
      }
    }
  }
}