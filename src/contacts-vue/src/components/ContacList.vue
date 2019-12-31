<template>
  <div>
    <table class="table table-striped" aria-labelledby="tabelLabel">
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
        <tr v-for="contact in contacts" v-bind:key="contact.id">
          <td>{{contact.name}}</td>
          <td>{{contact.address}}</td>
          <td>{{contact.city}}</td>
          <td>{{contact.state}}</td>
          <td>{{contact.postalCode}}</td>
          <td>{{contact.phone}}</td>
          <td>{{contact.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ContactsClient, Contact } from '../apis/contactsApi'

@Component
export default class HelloWorld extends Vue {
  name: string = 'ContactList';
  contacts: Contact[] = [];

  private created () {
    let client = new ContactsClient()
    client.getContacts().then(data => (this.contacts = data))
  }
}
</script>

<style scoped>
</style>
