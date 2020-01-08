import {ContactsClient, Contact} from './contactsApi';
import {inject} from 'aurelia-framework';

@inject(ContactsClient)
export class ContactList {
  contacts: Contact[];
  api: ContactsClient;
  selectedId: any;
  
  constructor(api: ContactsClient) {
    this.api = api;
    this.contacts = [];
  }

  created() {
    this.api.getContacts().then(contacts => this.contacts = contacts);
  }

  select(contact) {
    this.selectedId = contact.id;
    return true;
  }
}
