<template>
  <div>
    <ContactListComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactListComponent from '@/components/ContacList'

export default {
  name: 'contactList',
  components: {
    ContactListComponent
  }
}
</script>
