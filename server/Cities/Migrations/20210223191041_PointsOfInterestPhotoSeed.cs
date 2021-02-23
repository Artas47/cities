using Microsoft.EntityFrameworkCore.Migrations;

namespace Cities.Migrations
{
    public partial class PointsOfInterestPhotoSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Photo",
                table: "PointsOfInterest",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "PointsOfInterest",
                keyColumn: "Id",
                keyValue: 1,
                column: "Photo",
                value: "https://media.architecturaldigest.com/photos/5e811f71b27fd800085d543b/3:4/w_2646,h_3528,c_limit/GettyImages-1090450856.jpg");

            migrationBuilder.UpdateData(
                table: "PointsOfInterest",
                keyColumn: "Id",
                keyValue: 2,
                column: "Photo",
                value: "https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg");

            migrationBuilder.UpdateData(
                table: "PointsOfInterest",
                keyColumn: "Id",
                keyValue: 3,
                column: "Photo",
                value: "https://images.chinahighlights.com/2014/02/sheng-xin-cathedral441253b646d3_cut_2322x2409_350.jpg");

            migrationBuilder.UpdateData(
                table: "PointsOfInterest",
                keyColumn: "Id",
                keyValue: 4,
                column: "Photo",
                value: "https://i.pinimg.com/originals/22/a3/6d/22a36dab091ad838587c6d51f11d0ea1.jpg");

            migrationBuilder.UpdateData(
                table: "PointsOfInterest",
                keyColumn: "Id",
                keyValue: 5,
                column: "Photo",
                value: "https://cdn.britannica.com/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg");

            migrationBuilder.UpdateData(
                table: "PointsOfInterest",
                keyColumn: "Id",
                keyValue: 6,
                column: "Photo",
                value: "https://wallpapershome.com/images/pages/pic_v/4712.jpg");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Photo",
                table: "PointsOfInterest");
        }
    }
}
