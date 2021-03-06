﻿// <auto-generated />
using Cities.Contexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Cities.Migrations
{
    [DbContext(typeof(CityInfoContext))]
    [Migration("20210221192129_CitiesPhotosMigration")]
    partial class CitiesPhotosMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Cities.Entities.City", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasMaxLength(150);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.Property<string>("Photo");

                    b.HasKey("Id");

                    b.ToTable("Cities");

                    b.HasData(
                        new { Id = 1, Description = "The one with that big park.", Name = "New York City", Photo = "https://cdn.shopify.com/s/files/1/0053/6513/7472/products/chryslerbuildingrooftop.jpg?v=1544029382" },
                        new { Id = 2, Description = "The one with 14 milion people.", Name = "Tokyo", Photo = "https://i.pinimg.com/originals/ef/4b/e4/ef4be4f6e780b0f801a054707d379cd3.jpg" },
                        new { Id = 3, Description = "The one with that big tower.", Name = "Paris", Photo = "https://i.pinimg.com/474x/10/a9/4e/10a94e95321f95b99fa80ada2b69625b.jpg" }
                    );
                });

            modelBuilder.Entity("Cities.Entities.PointOfInterest", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CityId");

                    b.Property<string>("Description")
                        .HasMaxLength(150);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(30);

                    b.HasKey("Id");

                    b.HasIndex("CityId");

                    b.ToTable("PointsOfInterest");

                    b.HasData(
                        new { Id = 1, CityId = 1, Description = "The most visited urban park in the United States.", Name = "Central Park" },
                        new { Id = 2, CityId = 1, Description = "A 102-story skyscraper located in Midtown Manhattan.", Name = "Empire State Building" },
                        new { Id = 3, CityId = 2, Description = "A Gothic style cathedral, conceived by architects Jan and Pieter Appelmans.", Name = "Cathedral" },
                        new { Id = 4, CityId = 2, Description = "The the finest example of railway architecture in Belgium.", Name = "Antwerp Central Station" },
                        new { Id = 5, CityId = 3, Description = "A wrought iron lattice tower on the Champ de Mars, named after engineer Gustave Eiffel.", Name = "Eiffel Tower" },
                        new { Id = 6, CityId = 3, Description = "The world's largest museum.", Name = "The Louvre" }
                    );
                });

            modelBuilder.Entity("Cities.Entities.PointOfInterest", b =>
                {
                    b.HasOne("Cities.Entities.City", "City")
                        .WithMany("PointsOfInterest")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
