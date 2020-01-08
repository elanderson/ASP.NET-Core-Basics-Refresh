import {inject} from 'aurelia-framework';
import {ContactsClient, Contact} from './contactsApi';
import {areEqual} from './utility';

@inject(ContactsClient)
export class ContactDetail {
  api: ContactsClient;
  routeConfig: any;
  contact: Contact;
  originalContact: any;
  
  constructor(api){
    this.api = api;
  }

  activate(params, routeConfig) {
    this.routeConfig = routeConfig;

    return this.api.getContact(params.id).then(contact => {
      this.contact = contact;
      this.routeConfig.navModel.setTitle(contact.name);
      this.originalContact = JSON.parse(JSON.stringify(contact));
    });
  }

  get canSave() {
    return true;
  }

  save() {
    this.api.postContact(this.contact).then(contact => {
      this.contact = contact;
      this.routeConfig.navModel.setTitle(contact.name);
      this.originalContact = JSON.parse(JSON.stringify(contact));
    });
  }

  canDeactivate() {
    if (!areEqual(this.originalContact, this.contact)){
      return confirm('You have unsaved changes. Are you sure you wish to leave?');
    }

    return true;
  }
}
