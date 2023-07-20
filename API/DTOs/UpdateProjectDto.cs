using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class UpdateProjectDto
    {
        public int Id { get; set; }
        
        [Required]
        public string Name { get; set; }
        
        [Required]
        public string Description { get; set; }


        public IFormFile File { get; set; }

        [Required]
        public string Type { get; set; }

        [Required]
        public string Category { get; set; }

    }
}