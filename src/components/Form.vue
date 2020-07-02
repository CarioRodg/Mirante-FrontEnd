<template>
    <form class="container" @submit.prevent="registerCustomer">
        <div class="row">

            <div class="col-md">
                <h5> Nome: </h5>
                <div class="card">
                    <div class="card-body">
                        <div class="input-group">
                            <input class="form-control"  type="text" id= "name" v-model="customer.name"  />
                        </div>
                    </div>
                </div>
                <div class="error" v-if="!$v.name.required">O campo nome é obrigatório.</div>
            </div>
            
            <div class="col-md">
                <h5> Email: </h5>
                <div class="card">
                    <div class="card-body">
                        <div class="input-group">
                            <input class="form-control" type="text" v-model="customer.email" placeholder="Digite o email" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md">
                <h5> Telefone: </h5>
                <div class="card">
                    <div class="card-body">
                        <div class="input-group">
                            <input class="form-control" type="text" v-mask="mask"  v-model="customer.phone" mask="(##) #####-####" placeholder="Digite o telefone" />
                        </div>    
                    </div>
                </div>
            </div>
            <div class="col-md">
                <h5> CPF: </h5>
                <div class="card">
                    <div class="card-body">
                        <div class="input-group">
                        <input class="form-control" type="text" v-mask="maskCpf"  v-model="customer.cpf" placeholder="Digite o CPF" />
                        </div>              
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg">
                <button class="btn btn-info float-right mt-4 mb-4">Cadastrar</button>
            </div>
        </div>
        
    </form>

   
</template>

<script>
import Link from "../link";
import { required } from 'vuelidate/lib/validators';
export default {

    validations: {
        name: {
            required    
        }
    },
    data() {
        return {
           mask: "(##) ####-#####",
           maskCpf: "###.###.###-##",
            customer: {
                id: '',
                name: '',
                email: '',
                phone: '',
                cpf: '',
                errors: []
            }
        }
    },
     
    methods: {

        registerCustomer() {

            this.$http.post("customer", this.customer)
                .then(res => {
                    this.customer.id = res.data[0];
                    this.updateList();
                    this.clearForm();
                })
                .catch(err => {
                    console.log(err);
                })
        },

        updateList() {
            Link.$emit('updtListCustomer', this.customer);
        },

        

       

        clearForm() {
            this.customer = {
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
#main {
  background-color: #F1F1F1;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>