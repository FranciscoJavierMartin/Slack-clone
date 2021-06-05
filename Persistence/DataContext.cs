using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Channel> Channels { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<Channel>()
      .HasData(new Channel
      {
        Id = Guid.NewGuid(),
        Name = "DotNetCore",
        Description = "Channel dedicated to Net Core"
      },
      new Channel
      {
        Id = Guid.NewGuid(),
        Name = "Angular",
        Description = "Channel dedicated to Angular"
      },
      new Channel
      {
        Id = Guid.NewGuid(),
        Name = "React",
        Description = "Channel dedicated to React"
      });
      base.OnModelCreating(modelBuilder);

    }
  }
}