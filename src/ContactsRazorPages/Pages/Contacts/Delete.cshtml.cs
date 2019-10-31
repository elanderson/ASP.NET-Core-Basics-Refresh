using System.Threading.Tasks;
using Apis;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ContactsRazorPages.Pages.Contacts
{
    public class DeleteModel : PageModel
    {
        private readonly IContactsClient _client;

        public DeleteModel(IContactsClient client)
        {
            _client = client;
        }

        [BindProperty]
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

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            await _client.DeleteContactAsync(id.Value);
            
            return RedirectToPage("./Index");
        }
    }
}
