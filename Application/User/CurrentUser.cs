using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace Application.User
{
  public class CurrentUser
  {
    public class Query : IRequest<User>
    {

    }

    public class Handler : IRequestHandler<Query, User>
    {
      private readonly IUserAccessor userAccessor;
      private readonly UserManager<AppUser> userManager;
      private readonly IJwtGenerator jwtGenerator;

      public Handler(
          IUserAccessor userAccessor,
          UserManager<AppUser> userManager,
          IJwtGenerator jwtGenerator)
      {
        this.userAccessor = userAccessor;
        this.userManager = userManager;
        this.jwtGenerator = jwtGenerator;
      }
      public async Task<User> Handle(Query request, CancellationToken cancellationToken)
      {
        var user = await userManager.FindByNameAsync(userAccessor.GetCurrentUserName());
        return new User
        {
          UserName = user.UserName,
          Token = jwtGenerator.CreateToken(user)
        };
      }
    }
  }
}