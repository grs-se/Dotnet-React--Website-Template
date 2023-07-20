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
                    Name = "Angular Speedster Board 2000",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    PictureUrl = "/images/projects/Picture2.jpg",
                    Category = "Angular",
                    Type = "Boards",
                },
                new Project
                {
                    Name = "Green Angular Board 3000",
                    Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    PictureUrl = "/images/projects/Picture3.jpg",
                    Category = "Angular",
                    Type = "Boards",
                },
                new Project
                {
                    Name = "Core Board Speed Rush 3",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    PictureUrl = "/images/projects/Picture4.jpg",
                    Category = "NetCore",
                    Type = "Boards",
                },
                new Project
                {
                    Name = "Net Core Super Board",
                    Description =
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    PictureUrl = "/images/projects/Picture5.jpg",
                    Category = "NetCore",
                    Type = "Boards",
                },
                new Project
                {
                    Name = "React Board Super Whizzy Fast",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    PictureUrl = "/images/projects/Picture6.jpg",
                    Category = "React",
                    Type = "Boards",
                },
                new Project
                {
                    Name = "Typescript Entry Board",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    PictureUrl = "/images/projects/Picture7.jpg",
                    Category = "Convervation",
                    Type = "Boards",
                },
                new Project
                {
                    Name = "Core Blue Hat",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    PictureUrl = "/images/projects/Picture8.jpg",
                    Category = "Planting",
                    Type = "Hats",
                },
                new Project
                {
                    Name = "Green React Woolen Hat",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    PictureUrl = "/images/projects/Picture9.jpg",
                    Category = "Aboretum",
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