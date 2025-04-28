using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AnilGurau.Profile.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        [Route("")]
        public async Task<IActionResult> IndexAsync()
        {
            return Ok();
        }
    }

    
}
