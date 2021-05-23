using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ChannelsController : ControllerBase
  {
    public ChannelsController() { }

    [HttpGet]
    public IActionResult GetChannels()
    {
      return Ok(new List<string>{
        ".NetCore",
        "React",
        "Angular"
      });
    }

    [HttpGet("{id}")]
    public IActionResult GetChannel(int id)
    {
      return Ok(
        ".NetCore"
       );
    }
  }
}