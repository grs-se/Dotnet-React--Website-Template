using API.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public static class DbInitializer
    {
        public static async Task Initialize(StoreContext context, UserManager<User> userManager)
        {
            if (!userManager.Users.Any())
            {

                var admin = new User
                {
                    UserName = "admin",
                    Email = "admin@test.com"
                };

                await userManager.CreateAsync(admin, "Pa$$w0rd");
                await userManager.AddToRolesAsync(admin, new[] { "Admin" });
            }


            if (context.Projects.Any()) return;

            var projects = new List<Project>
            {
                new Project
                {
                    Name = "Pruned Hedges",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    PictureUrl = "/images/projects/Picture2.jpg",
                    Category = "Annual plant",
                     Type = "Gardening",
                },
                new Project
                {
                    Name = "Blossom trimming",
                    Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    PictureUrl = "/images/projects/Picture3.jpg",
                    Category = "Floriculture",
                     Type = "Gardening",
                },
                new Project
                {
                    Name = "Cherry apples",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    PictureUrl = "/images/projects/Picture4.jpg",
                    Category = "Community garden",
                     Type = "Gardening",
                },
                new Project
                {
                    Name = "Harvesting wheat",
                    Description =
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    PictureUrl = "/images/projects/Picture5.jpg",
                    Category = "Fern",
                     Type = "Gardening",
                },
                //new Project
                //{
                //    Name = "Nectar collection",
                //    Description =
                //        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                //    PictureUrl = "/images/projects/Picture6.jpg",
                //    Category = "Flower beds",
                //    Type = "Gardening",
                //},
                new Project
                {
                    Name = "Oak tree climbing",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    PictureUrl = "/images/projects/Picture7.jpg",
                    Category = "Butterfly gardening",
                    Type = "Gardening",
                },
                new Project
                {
                    Name = "Pond swimming",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    PictureUrl = "/images/projects/Picture8.jpg",
                    Category = "Botanical garden",
               Type = "Gardening",
                },
                new Project
                {
                    Name = "Community garden",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    PictureUrl = "/images/projects/Picture3.jpg",
                    Category = "Community garden",
                  Type = "Gardening",
                },
            };

            foreach (var project in projects)
            {
                context.Projects.Add(project);
            }
            context.SaveChanges();

            if (context.Services.Any()) return;

            var services = new List<Service>
            {
                new Service
                {
                    Name = "Floral Gardening",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    PictureUrl = "/images/projects/Picture9.jpg",
                },
                 new Service
                {
                    Name = "Botanical garden",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    PictureUrl = "/images/projects/Picture7.jpg",
                },
                    new Service
                {
                    Name = "Community Garden",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    PictureUrl = "/images/projects/Picture7.jpg",
                },
            };

            foreach (var service in services)
            {
                context.Services.Add(service);
            }
            context.SaveChanges();
        }
    }
}