using API.Entities;

namespace API.Extensions
{
    public static class ServiceExtensions
    {
        public static IQueryable<Service> Sort(this IQueryable<Service> query, string orderBy)
        {
            if (string.IsNullOrWhiteSpace(orderBy)) return query.OrderBy(p => p.Name);

            //query = orderBy switch
            //{
            //    "date" => query.OrderBy(p => p.Date),
            //    "dateDesc" => query.OrderByDescending(p => p.Date),
            //    _ => query.OrderBy(n => n.Name)
            //};

            return query;
        }

        public static IQueryable<Service> Search(this IQueryable<Service> query, string searchTerm)
        {
            if (string.IsNullOrEmpty(searchTerm)) return query;

            var lowerCaseSearchTerm = searchTerm.Trim().ToLower();

            return query.Where(p => p.Name.ToLower().Contains(lowerCaseSearchTerm));
        }

        //public static IQueryable<Service> Filter(this IQueryable<Service> query, string category, string type)
        //{
        //    var categoryList = new List<string>();
        //    var typeList = new List<string>();

        //    if (!string.IsNullOrEmpty(category))
        //        categoryList.AddRange(category.ToLower().Split(",").ToList());

        //    if (!string.IsNullOrEmpty(type))
        //        typeList.AddRange(type.ToLower().Split(",").ToList());

        //    return query;
        //}
    }
}