using System.Threading.Tasks;
using Apis;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ContactsRazorPages.Pages.Contacts
{
    public class EditModel : PageModel
    {
        private readonly IContactsClient _client;

        public EditModel(IContactsClient client)
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

        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            await _client.PutContactAsync(Contact.Id, Contact);

            return RedirectToPage("./Index");
        }
    }
}
