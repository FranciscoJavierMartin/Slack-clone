using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ChannelsController : ControllerBase
  {
    private readonly DataContext _context;
    private readonly ILogger<ChannelsController> _logger;

    public ChannelsController(DataContext context, ILogger<ChannelsController> logger)
    {
      _context = context ?? throw new ArgumentNullException(nameof(context));
      _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    [HttpGet]
    public async Task<IActionResult> GetChannels()
    {
      return Ok(await _context.Channels.ToListAsync());
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetChannel(Guid id)
    {
      return Ok(await _context.Channels.FirstOrDefaultAsync(x => x.Id == id));
    }
  }
}