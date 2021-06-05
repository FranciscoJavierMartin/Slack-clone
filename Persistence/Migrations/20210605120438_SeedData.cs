using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class SeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Channels",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { new Guid("68e14cb6-5266-48ff-870a-b5d2093f6e1d"), "Channel dedicated to Net Core", "DotNetCore" });

            migrationBuilder.InsertData(
                table: "Channels",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { new Guid("bd5bda26-da48-4698-b8b0-d0f520971eda"), "Channel dedicated to Angular", "Angular" });

            migrationBuilder.InsertData(
                table: "Channels",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { new Guid("04cea954-d26f-4eb7-955d-eb29c1f332c1"), "Channel dedicated to React", "React" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Channels",
                keyColumn: "Id",
                keyValue: new Guid("04cea954-d26f-4eb7-955d-eb29c1f332c1"));

            migrationBuilder.DeleteData(
                table: "Channels",
                keyColumn: "Id",
                keyValue: new Guid("68e14cb6-5266-48ff-870a-b5d2093f6e1d"));

            migrationBuilder.DeleteData(
                table: "Channels",
                keyColumn: "Id",
                keyValue: new Guid("bd5bda26-da48-4698-b8b0-d0f520971eda"));
        }
    }
}
