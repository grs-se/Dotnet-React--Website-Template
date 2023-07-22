using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class BaseCreateDto
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public IFormFile File { get; set; }
    }
}
