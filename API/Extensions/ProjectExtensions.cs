using API.Entities;

namespace API.Extensions
{
    public static class ProjectExtensions
    {
        public static IQueryable<Project> Sort(this IQueryable<Project> query, string orderBy)
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

        public static IQueryable<Project> Search(this IQueryable<Project> query, string searchTerm)
        {
            if (string.IsNullOrEmpty(searchTerm)) return query;

            var lowerCaseSearchTerm = searchTerm.Trim().ToLower();

            return query.Where(p => p.Name.ToLower().Contains(lowerCaseSearchTerm));
        }

        public static IQueryable<Project> Filter(this IQueryable<Project> query, string category, string type)
        {
            var categoryList = new List<string>();
            var typeList = new List<string>();

            if (!string.IsNullOrEmpty(category))
                categoryList.AddRange(category.ToLower().Split(",").ToList());

            if (!string.IsNullOrEmpty(type))
                typeList.AddRange(type.ToLower().Split(",").ToList());

            query = query.Where(p => categoryList.Count == 0 || categoryList.Contains(p.Category.ToLower()));

            query = query.Where(p => typeList.Count == 0 || typeList.Contains(p.Type.ToLower()));

            return query;
        }
    }
}