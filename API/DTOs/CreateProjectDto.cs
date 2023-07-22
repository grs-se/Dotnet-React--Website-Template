using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class CreateProjectDto : BaseCreateDto
    {

        [Required]
        public string Type { get; set; }

        [Required]
        public string Category { get; set; }

    }
}