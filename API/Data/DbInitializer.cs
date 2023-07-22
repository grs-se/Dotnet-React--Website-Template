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
                        "Seasonal garden tasks are crucial to long term maintenance of your garden. Timing is everything with gardening. Whether pruning for flower, fruit or form. Mulching borders to stay in control of the summer weeds, feeding lawns, cutting wildflower meadows, pruning Wisteria, roses, fruit and flowering shrubs. Yew hedges in spring and Autumn. Stone fruit in summer, apples, pears, grapes – summer for fruit, winter for growth. Hay cuts for flowers or butterflies or winter habitat and food. An annual garden management and maintenance plan, a month by month commitment, regular visits or a seasonal one-off, we are passionate about creating gardens that are not only well maintained but beautiful places to be.",
                    PictureUrl = "/images/projects/Picture9.jpg",
                },
                 new Service
                {
                    Name = "Botanical garden",
                    Description =
                        "With many years experience we can advise and carry out the best way to achieve the results you want in the garden.  Weeding borders, maintaining lawns, pruning roses, strimming meadows, training fruit trees, propagating plants or designing borders. Our garden services may be a simple regular grass cut or a full garden maintenance visit. We tailor our visits to both the demands of the garden and the client, recommending the best way to achieve specific goals. As a team we are enthusiastic about plants – filling the garden with a vibrant display, letting the plants we want fill up the borders, lawns and shrubberies.",
                    PictureUrl = "/images/projects/Picture2.jpg",
                },
                    new Service
                {
                    Name = "Community Garden",
                    Description =
                        "Avoid bare ground and pack the border full of plants that you want. Slugs? Dont plant French Marigold, Lupins or Delphiniums! (though established meadows of Lupin on old railway lines or churchyards give the lie to there susceptibility).\r\n\r\nNew plantings? Mulch the ground so summer weeding is made easy. Companion planting – works both ways with some species even influencing the vigour of Ground Elder & Bindweed.\r\n\r\nRegular weeding. Sometimes there is no miracle cure other than little and often – keeping on top of weeds and diseases through regular cultural techniques (hands & knees).",
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