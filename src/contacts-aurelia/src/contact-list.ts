import {WebAPI} from './web-api';
import {inject} from 'aurelia-framework';

@inject(WebAPI)
export class ContactList {
  contacts: any;
  api: any;
  selectedId: any;
  
  constructor(api) {
    this.api = api;
    this.contacts = [];
  }

  created() {
    this.api.getContactList().then(contacts => this.contacts = contacts);
  }

  select(contact) {
    this.selectedId = contact.id;
    return true;
  }
}
