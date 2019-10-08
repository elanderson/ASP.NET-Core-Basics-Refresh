using System.Collections.Generic;
using System.Linq;
using ContactsApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ContactsApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactsController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        public ContactsController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Contact> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new Contact
            {
                Id = index,
                Name = $"Test{index}",
                Address = $"{index} Main St.",
                City = "Nashville",
                State = "TN",
                PostalCode = "37219",
                Phone = "615-555-5555",
                Email = $"test{index}@test.com"
            });
        }
    }
}
