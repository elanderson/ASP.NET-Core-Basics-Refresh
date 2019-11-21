import { Component } from '@angular/core';
import { contacts as Contacts } from "../apis/contactApi";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent {
  public contacts: Contacts.IContact[];

  constructor(contactsClient : Contacts.ContactsClient) {
    contactsClient.getContacts().subscribe(result => {
        this.contacts = result;
      },
      error => console.error(error));
  }
}
