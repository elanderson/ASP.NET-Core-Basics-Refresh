using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Apis;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ContactsRazorPages.Pages.Contacts
{
    public class IndexModel : PageModel
    {
        private readonly IContactsClient _client;

        public IndexModel(IContactsClient client)
        {
            _client = client;
        }

        public IList<Contact> Contact { get;set; }

        public async Task OnGetAsync()
        {
            Contact = (await _client.GetContactsAsync()).ToList();
        }
    }
}
