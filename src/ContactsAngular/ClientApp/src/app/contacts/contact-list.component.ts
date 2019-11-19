import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent {
  public contacts: Contact[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Contact[]>(baseUrl + 'contacts').subscribe(result => {
      this.contacts = result;
    }, error => console.error(error));
  }
}

interface Contact {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  email: string;
}
