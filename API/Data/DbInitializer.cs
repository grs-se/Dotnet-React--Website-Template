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
                    Type = "Boards",
                },
                new Project
                {
                    Name = "Blossom trimming",
                    Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    PictureUrl = "/images/projects/Picture3.jpg",
                    Category = "Floriculture",
                    Type = "Boards",
                },
                new Project
                {
                    Name = "Cherry apples",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    PictureUrl = "/images/projects/Picture4.jpg",
                    Category = "Community garden",
                    Type = "Boards",
                },
                new Project
                {
                    Name = "Harvesting wheat",
                    Description =
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    PictureUrl = "/images/projects/Picture5.jpg",
                    Category = "Fern",
                    Type = "Boards",
                },
                //new Project
                //{
                //    Name = "Nectar collection",
                //    Description =
                //        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                //    PictureUrl = "/images/projects/Picture6.jpg",
                //    Category = "Flower beds",
                //    Type = "Boards",
                //},
                new Project
                {
                    Name = "Oak tree climbing",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    PictureUrl = "/images/projects/Picture7.jpg",
                    Category = "Butterfly gardening",
                    Type = "Boards",
                },
                new Project
                {
                    Name = "Pond swimming",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    PictureUrl = "/images/projects/Picture8.jpg",
                    Category = "Botanical garden",
                    Type = "Hats",
                },
                new Project
                {
                    Name = "Moss cultivating",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    PictureUrl = "/images/projects/Picture9.jpg",
                    Category = "Flower garden",
                    Type = "Hats",
                },
            };

            foreach (var project in projects)
            {
                context.Projects.Add(project);
            }

            context.SaveChanges();
        }
    }
}