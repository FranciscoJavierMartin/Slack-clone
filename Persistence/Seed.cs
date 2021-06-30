using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{

  public class Seed
  {
    public static async Task SeedData(UserManager<AppUser> userManager)
    {
      if (!userManager.Users.Any())
      {
        var users = new List<AppUser>{
            new AppUser {
              Id = "1",
              UserName = "John",
              Email="john@doe.com",
            },
            new AppUser {
              Id = "2",
              UserName = "Jane",
              Email="jane@doe.com",
            },
            new AppUser {
              Id = "3",
              UserName = "Test",
              Email="test@user.com",
            },
          };

        foreach (var user in users)
        {
          await userManager.CreateAsync(user, "Pa$$w0rd");
        }
      }
    }
  }
}