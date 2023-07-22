namespace API.Entities
{
    public class Photo
    {
        public int Id { get; set; }
        public string PictureUrl { get; set; }
        public string FileName { get; set; }
        public bool IsMain { get; set; }
        public Project Project { get; set; }
        public int ProjectId { get; set; }
        //public Service Service { get; set; }
        //public int ServiceId { get; set; }
    }
}
