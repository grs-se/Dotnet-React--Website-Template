using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.RequestHelpers;
using API.Services;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ServicesController : BaseApiController
    {
        private readonly StoreContext _context;
        private readonly IMapper _mapper;
        private readonly ImageService _imageService;
        public ServicesController(StoreContext context, IMapper mapper, ImageService imageService)
        {
            _imageService = imageService;
            _mapper = mapper;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<PagedList<Service>>> GetServices([FromQuery] ServiceParams serviceParams)
        {
            var query = _context.Services
                .Sort(serviceParams.OrderBy)
                //.Search(serviceParams.SearchTerm)
                .AsQueryable();

            var services = await PagedList<Service>.ToPagedList(query, serviceParams.PageNumber,
                serviceParams.PageSize);

            Response.AddPaginationHeader(services.MetaData);

            return services;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Service>> GetService(int id)
        {
            var service = await _context.Services.FindAsync(id);

            if (service == null) return NotFound();

            return service;
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult<Service>> CreateService([FromForm] CreateServiceDto serviceDto)
        {
            var service = _mapper.Map<Service>(serviceDto);

            if (serviceDto.File != null)
            {
                var imageResult = await _imageService.AddImageAsync(serviceDto.File);

                if (imageResult.Error != null)
                    return BadRequest(new ProblemDetails { Title = imageResult.Error.Message });

                service.PictureUrl = imageResult.SecureUrl.ToString();
                service.PublicId = imageResult.PublicId;
            }

            _context.Services.Add(service);

            var result = await _context.SaveChangesAsync() > 0;

            if (result) return CreatedAtRoute("GetService", new { Id = service.Id }, service);

            return BadRequest(new ProblemDetails { Title = "Problem creating new service" });
        }

        //[Authorize(Roles = "Admin")]
        //[HttpPut]
        //public async Task<ActionResult<Service>> UpdateService([FromForm] UpdateServiceDto serviceDto)
        //{
        //    var service = await _context.Services.FindAsync(serviceDto.Id);

        //    if (service == null) return NotFound();

        //    _mapper.Map(serviceDto, service);

        //    if (serviceDto.File != null)
        //    {
        //        var imageUploadResult = await _imageService.AddImageAsync(serviceDto.File);

        //        if (imageUploadResult.Error != null)
        //            return BadRequest(new ProblemDetails { Title = imageUploadResult.Error.Message });

        //        if (!string.IsNullOrEmpty(service.PublicId))
        //            await _imageService.DeleteImageAsync(service.PublicId);

        //        service.PictureUrl = imageUploadResult.SecureUrl.ToString();
        //        service.PublicId = imageUploadResult.PublicId;
        //    }

        //    var result = await _context.SaveChangesAsync() > 0;

        //    if (result) return Ok(service);

        //    return BadRequest(new ProblemDetails { Title = "Problem updating service" });
        //}

        //[Authorize(Roles = "Admin")]
        //[HttpDelete("{id}")]
        //public async Task<ActionResult> DeleteService(int id)
        //{
        //    var service = await _context.Services.FindAsync(id);

        //    if (service == null) return NotFound();

        //    if (!string.IsNullOrEmpty(service.PublicId))
        //        await _imageService.DeleteImageAsync(service.PublicId);

        //    _context.Services.Remove(service);

        //    var result = await _context.SaveChangesAsync() > 0;

        //    if (result) return Ok();

        //    return BadRequest(new ProblemDetails { Title = "Problem deleting service" });
        //}
    }
}