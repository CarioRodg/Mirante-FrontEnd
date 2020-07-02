<template>
<div>
  <Header />
  <Form v-if="register" />
  <Edit v-else :customer="customer" @rgt="register = $event"/>
  <ListCustomer :register="register" @chng="customer = $event" @rgt="register = $event" />
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import Edit from "./components/Edit.vue";

import ListCustomer from "./components/ListCustomer.vue";


export default {
  components: { Header, Form, Edit, ListCustomer },
  data() {
    return {
      register: true,
      customer: {
          name: '',
          email: '',
          phone: '',
          cpf: ''
      }
    }
  }
}
</script>

<style>


</style>
