using System.Threading.Tasks;
using Application.User;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  [AllowAnonymous]
  public class UserController : BaseController
  {
    [HttpPost("login")]
    public async Task<ActionResult<User>> Login(Login.Query query)
    {
      return await Mediator.Send(query);
    }

    // TODO: Uncomment when add DTO
    // [HttpPost("register")]
    // public async Task<ActionResult<User>> Register(Register.Command command)
    // {
    //   return await Mediator.Send(command);
    // }

    [HttpGet]
    [Authorize]
    public async Task<ActionResult<User>> GetCurrentUser(){
      return await Mediator.Send(new CurrentUser.Query());
    }
  }
}