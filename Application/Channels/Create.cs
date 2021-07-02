using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Channels
{
  public class Create
  {
    public class Command : IRequest
    {
      public string Name { get; set; }
      public string Description { get; set; }
    }

    public class CommandValidator : AbstractValidator<Command>
    {
      public CommandValidator()
      {
        RuleFor(x => x.Name).NotEmpty();
        RuleFor(x => x.Description).NotEmpty();
      }
    }


    public class Handler : IRequestHandler<Command>
    {
      private readonly DataContext _context;
      public Handler(DataContext context)
      {
        _context = context ?? throw new ArgumentNullException(nameof(context));
      }

      public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
      {
        var channel = new Channel
        {
          Id = new Guid(),
          Name = request.Name,
          Description = request.Description,
        };

        _context.Channels.Add(channel);

        return await _context.SaveChangesAsync() > 0 
            ? Unit.Value 
            : throw new Exception("Problem saving changes on Channel");
      }
    }
  }
}