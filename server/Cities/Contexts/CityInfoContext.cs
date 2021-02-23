using Cities.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cities.Contexts
{
    public class CityInfoContext : DbContext
    {
        public DbSet<City> Cities { get; set; }
        public DbSet<PointOfInterest> PointsOfInterest { get; set; }

        public CityInfoContext(DbContextOptions<CityInfoContext> options)
           : base(options)
        {
            //  Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<City>()
                 .HasData(
                new City()
                {
                    Id = 1,
                    Name = "New York City",
                    Description = "The one with that big park.",
                    Photo = "https://cdn.shopify.com/s/files/1/0053/6513/7472/products/chryslerbuildingrooftop.jpg?v=1544029382"
                },
                new City()
                {
                    Id = 2,
                    Name = "Tokyo",
                    Description = "The one with 14 milion people.",
                    Photo = "https://i.pinimg.com/originals/ef/4b/e4/ef4be4f6e780b0f801a054707d379cd3.jpg"
                },
                new City()
                {
                    Id = 3,
                    Name = "Paris",
                    Description = "The one with that big tower.",
                    Photo = "https://i.pinimg.com/474x/10/a9/4e/10a94e95321f95b99fa80ada2b69625b.jpg"
                });


            modelBuilder.Entity<PointOfInterest>()
              .HasData(
                new PointOfInterest()
                {
                    Id = 1,
                    CityId = 1,
                    Name = "Central Park",
                    Description = "The most visited urban park in the United States.",
                    Photo = "https://media.architecturaldigest.com/photos/5e811f71b27fd800085d543b/3:4/w_2646,h_3528,c_limit/GettyImages-1090450856.jpg"
                },
                new PointOfInterest()
                {
                    Id = 2,
                    CityId = 1,
                    Name = "Empire State Building",
                    Description = "A 102-story skyscraper located in Midtown Manhattan.",
                    Photo = "https://cdn.britannica.com/73/114973-050-2DC46083/Midtown-Manhattan-Empire-State-Building-New-York.jpg"
                },
                  new PointOfInterest()
                  {
                      Id = 3,
                      CityId = 2,
                      Name = "Cathedral",
                      Description = "A Gothic style cathedral, conceived by architects Jan and Pieter Appelmans.",
                      Photo = "https://images.chinahighlights.com/2014/02/sheng-xin-cathedral441253b646d3_cut_2322x2409_350.jpg"
                  },
                new PointOfInterest()
                {
                    Id = 4,
                    CityId = 2,
                    Name = "Antwerp Central Station",
                    Description = "The the finest example of railway architecture in Belgium.",
                    Photo = "https://i.pinimg.com/originals/22/a3/6d/22a36dab091ad838587c6d51f11d0ea1.jpg"
                },
                new PointOfInterest()
                {
                    Id = 5,
                    CityId = 3,
                    Name = "Eiffel Tower",
                    Description = "A wrought iron lattice tower on the Champ de Mars, named after engineer Gustave Eiffel.",
                    Photo = "https://cdn.britannica.com/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg"
                },
                new PointOfInterest()
                {
                    Id = 6,
                    CityId = 3,
                    Name = "The Louvre",
                    Description = "The world's largest museum.",
                    Photo = "https://wallpapershome.com/images/pages/pic_v/4712.jpg"
                }
                );

            base.OnModelCreating(modelBuilder);
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer("connectionstring");
        //    base.OnConfiguring(optionsBuilder);
        //}

    }
}
