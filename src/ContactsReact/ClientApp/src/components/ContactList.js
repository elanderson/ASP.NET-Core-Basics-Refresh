import React, { Component } from 'react';
import { ContactsClient } from './contactsApi';  

export class ContactList extends Component {
    static displayName = ContactList.name;

    constructor(props) {
        super(props);
        this.state = { contacts: [], loading: true };
    }

    componentDidMount() {
        this.populateContactData();
    }

    static renderContactsTable(contacts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Postal Code</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact =>
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.address}</td>
                            <td>{contact.city}</td>
                            <td>{contact.state}</td>
                            <td>{contact.postalCode}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ContactList.renderContactsTable(this.state.contacts);

        return (
            <div>
                <h1 id="tabelLabel" >Contacts</h1>
                {contents}
            </div>
        );
    }

    async populateContactData() {
        let client = new ContactsClient();
        client.getContacts()
              .then(data => this.setState({ contacts: data, loading: false }));
    }
}
