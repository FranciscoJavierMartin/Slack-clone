using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ChannelsController : ControllerBase
  {
    private readonly DataContext _context;

    public ChannelsController(DataContext context)
    {
      _context = context;
    }

    [HttpGet]
    public IActionResult GetChannels()
    {
      return Ok(_context.Channels.ToList());
    }

    [HttpGet("{id}")]
    public IActionResult GetChannel(Guid id)
    {
      return Ok(_context.Channels.FirstOrDefault(x => x.Id == id));
    }
  }
}