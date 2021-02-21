using Microsoft.EntityFrameworkCore.Migrations;

namespace Cities.Migrations
{
    public partial class CitiesPhotosMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Photo",
                table: "Cities",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 1,
                column: "Photo",
                value: "https://cdn.shopify.com/s/files/1/0053/6513/7472/products/chryslerbuildingrooftop.jpg?v=1544029382");

            migrationBuilder.UpdateData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Description", "Name", "Photo" },
                values: new object[] { "The one with 14 milion people.", "Tokyo", "https://i.pinimg.com/originals/ef/4b/e4/ef4be4f6e780b0f801a054707d379cd3.jpg" });

            migrationBuilder.UpdateData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 3,
                column: "Photo",
                value: "https://i.pinimg.com/474x/10/a9/4e/10a94e95321f95b99fa80ada2b69625b.jpg");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Photo",
                table: "Cities");

            migrationBuilder.UpdateData(
                table: "Cities",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Description", "Name" },
                values: new object[] { "The one with the cathedral that was never really finished.", "Antwerp" });
        }
    }
}
