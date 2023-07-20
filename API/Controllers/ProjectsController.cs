using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.RequestHelpers;
using API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProjectsController : BaseApiController
    {
        private readonly StoreContext _context;
        private readonly IMapper _mapper;
        private readonly ImageService _imageService;
        public ProjectsController(StoreContext context, IMapper mapper, ImageService imageService)
        {
            _imageService = imageService;
            _mapper = mapper;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<PagedList<Project>>> GetProjects([FromQuery] ProjectParams projectParams)
        {
            var query = _context.Projects
                .Sort(projectParams.OrderBy)
                .Search(projectParams.SearchTerm)
                .Filter(projectParams.Categories, projectParams.Types)
                .AsQueryable();

            var projects = await PagedList<Project>.ToPagedList(query, projectParams.PageNumber,
                projectParams.PageSize);

            Response.AddPaginationHeader(projects.MetaData);

            return projects;
        }

        [HttpGet("{id}", Name = "GetProject")]
        public async Task<ActionResult<Project>> GetProject(int id)
        {
            var project = await _context.Projects.FindAsync(id);

            if (project == null) return NotFound();

            return project;
        }

        [HttpGet("filters")]
        public async Task<IActionResult> GetFilters()
        {
            var categories = await _context.Projects.OrderBy(p => p.Category).Select(p => p.Category).Distinct().ToListAsync();
            var types = await _context.Projects.Select(p => p.Type).Distinct().ToListAsync();

            return Ok(new { categories, types });
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult<Project>> CreateProject([FromForm] CreateProjectDto projectDto)
        {
            var project = _mapper.Map<Project>(projectDto);

            if (projectDto.File != null)
            {
                var imageResult = await _imageService.AddImageAsync(projectDto.File);

                if (imageResult.Error != null)
                    return BadRequest(new ProblemDetails { Title = imageResult.Error.Message });

                project.PictureUrl = imageResult.SecureUrl.ToString();
                project.PublicId = imageResult.PublicId;
            }

            _context.Projects.Add(project);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return CreatedAtRoute("GetProject", new { Id = project.Id }, project);

            return BadRequest(new ProblemDetails { Title = "Problem creating new project" });
        }

        [Authorize(Roles = "Admin")]
        [HttpPut]
        public async Task<ActionResult<Project>> UpdateProject([FromForm] UpdateProjectDto projectDto)
        {
            var project = await _context.Projects.FindAsync(projectDto.Id);

            if (project == null) return NotFound();

            _mapper.Map(projectDto, project);

            if (projectDto.File != null)
            {
                var imageUploadResult = await _imageService.AddImageAsync(projectDto.File);

                if (imageUploadResult.Error != null)
                    return BadRequest(new ProblemDetails { Title = imageUploadResult.Error.Message });

                if (!string.IsNullOrEmpty(project.PublicId))
                    await _imageService.DeleteImageAsync(project.PublicId);

                project.PictureUrl = imageUploadResult.SecureUrl.ToString();
                project.PublicId = imageUploadResult.PublicId;
            }

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return Ok(project);

            return BadRequest(new ProblemDetails { Title = "Problem updating project" });
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProject(int id)
        {
            var project = await _context.Projects.FindAsync(id);

            if (project == null) return NotFound();

            if (!string.IsNullOrEmpty(project.PublicId))
                await _imageService.DeleteImageAsync(project.PublicId);

            _context.Projects.Remove(project);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return Ok();

            return BadRequest(new ProblemDetails { Title = "Problem deleting project" });
        }
    }
}