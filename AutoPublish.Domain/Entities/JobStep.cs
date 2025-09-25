namespace AutoPublish.Domain.Entities
{
    public class JobStep(string name)
    {
        public string Name { get; set; } = name;
        public int Order { get; set; } = 0;
    }
}
