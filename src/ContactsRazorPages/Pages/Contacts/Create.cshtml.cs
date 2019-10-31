using System.Threading.Tasks;
using Apis;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ContactsRazorPages.Pages.Contacts
{
    public class CreateModel : PageModel
    {
        private readonly IContactsClient _client;

        public CreateModel(IContactsClient client)
        {
            _client = client;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Contact Contact { get; set; }

        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            await _client.PostContactAsync(Contact);
            
            return RedirectToPage("./Index");
        }
    }
}
