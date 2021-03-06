using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Channels;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

  public class ChannelsController : BaseController
  {

    [HttpGet]
    public async Task<ActionResult<List<Channel>>> GetChannels()
    {
      return await Mediator.Send(new List.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Channel>> GetChannel(Guid id)
    {
      return await Mediator.Send(new Details.Query { Id = id });
    }

    [HttpPost]
    public async Task<Unit> CreateChannel([FromBody] Create.Command command)
    {
      return await Mediator.Send(command);
    }
  }
}