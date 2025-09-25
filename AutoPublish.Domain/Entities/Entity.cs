using System.ComponentModel.DataAnnotations.Schema;

namespace AutoPublish.Domain.Entities
{
    public class Entity<TKey>
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public TKey? Id { get; set; }
    }
}
