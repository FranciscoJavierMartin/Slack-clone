using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using Application.Validators;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace Application.User
{
  public class Register
  {
    public class Command : IRequest<UserDto>
    {
      public string UserName { get; set; }
      public string Email { get; set; }
      public string Password { get; set; }
    }

    public class CommandValidator : AbstractValidator<Command>
    {
      public CommandValidator(UserManager<AppUser> userManager)
      {
        RuleFor(x => x.UserName)
            .NotEmpty()
            .MustAsync(async (username, cancellationToken) =>
                await userManager.FindByNameAsync(username) == null)
            .WithMessage("UserName already exists");
        RuleFor(x => x.Email)
            .NotEmpty()
            .EmailAddress()
            .MustAsync(async (email, cancellationToken) =>
                await userManager.FindByEmailAsync(email) == null)
            .WithMessage("Email already exists");
        RuleFor(x => x.Password).Password();
      }
    }

    public class Handler : IRequestHandler<Command, UserDto>
    {
      private readonly UserManager<AppUser> userManager;
      private readonly IJwtGenerator jwtGenerator;

      public Handler(UserManager<AppUser> userManager, IJwtGenerator jwtGenerator)
      {
        this.userManager = userManager;
        this.jwtGenerator = jwtGenerator;
      }


      public async Task<UserDto> Handle(Command request, CancellationToken cancellationToken)
      {
        var user = new AppUser
        {
          Email = request.Email,
          UserName = request.UserName,
        };

        var result = await userManager.CreateAsync(user, request.Password);

        return result.Succeeded
            ? new UserDto
            {
              UserName = user.UserName,
              Email = user.Email,
              Token = jwtGenerator.CreateToken(user)
            }
            : throw new Exception("Error registering user");
      }
    }
  }
}