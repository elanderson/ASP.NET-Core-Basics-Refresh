using System.Threading.Tasks;
using Apis;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ContactsRazorPages.Pages.Contacts
{
    public class DetailsModel : PageModel
    {
        private readonly IContactsClient _client;

        public DetailsModel(IContactsClient client)
        {
            _client = client;
        }

        public Contact Contact { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Contact = await _client.GetContactAsync(id.Value);

            if (Contact == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
