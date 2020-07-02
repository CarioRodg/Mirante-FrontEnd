<template>
  <div class="container"> 
     <table class="table">
      <thead>
        <tr>
          <th scope="col">Nome:</th>
          <th scope="col">Email:</th>
          <th scope="col">Telefone:</th>
          <th scope="col">CPF:</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <th scope="row">{{ customer.name }}</th>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.cpf }}</td>
          <td><button class="btn btn-warning" @click="updtCustomer(customer)"><i class="fa fa-pencil fa-fw"></i></button></td>
          <td><button class="btn btn-danger" @click="deleteCustomer(customer)"><i class="fa fa-trash"></i></button></td>
        </tr>
       
      </tbody>
    </table>
  </div>
</template>

<script>
import Link from "../link";

export default {
   

  data() {
    return  {
      customers: []
    }
  },

  created() {
    this.searchCustomer();
    this.updateList();
  },

  methods: {

    searchCustomer() {
      this.$http.get('customer')
        .then(cus => {
          this.customers = cus.data
        })
        .catch(error => {
          console.log(error);
        })
    },

     deleteCustomer() {
            this.$http.delete(`customer/${this.customer.id}` )
            .then(() => {
                this.reset();
            })
            .catch(error =>  {
                console.log("Erro ao remover cliente", error);
            })
        },

  removeList() {
      Link.$on('updtListCustomer', customer => {
        this.customers.push(customer)
      });
    },
    

    updateList() {
      Link.$on('updtListCustomer', customer => {
        this.customers.push(customer)
      });
    },


    updtCustomer(customer) {
      this.$emit('rgt', false);
      this.$emit('chng', customer);
    },

 
  }
}
</script>

<style>

</style>