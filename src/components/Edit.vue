<template>
    <form class="container" @submit.prevent="updateCustomer">
        <div class="row">
            <div class="col-md">
                <h5> Nome: </h5>
                <div class="card">
                    <div class="card-body">
                        <div class="input-group">
                            <input class="form-control" type="text" v-model="customer.name" placeholder="Digite o nome" />
                        </div>
                    </div>
                </div>
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
                            <input class="form-control" type="text" v-mask="mask"  v-model="customer.phone" placeholder="Digite o telefone" />
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
                <button class="btn btn-info float-right mt-4">Editar</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {

    props: {
        customer: {type: Object, required: true}
    },

    data() {
        return {
           mask: "(##) ####-#####",
           maskCpf: "###.###.###-##",
            
        }
    },

    methods: {
        updateCustomer() {
            const obj = { 
                name: this.customer.name, 
                email: this.customer.email,
                phone: this.customer.phone,
                cpf: this.customer.cpf 
            }
            this.$http.put(`customer/${this.customer.id}`, obj )
            .then(() => {
                this.reset();
            })
            .catch(error =>  {
                console.log("Erro ao atualizar cliente", error);
            })
        },

        reset() {
            this.$emit('rgt', true);
        }
    }
}
</script>

<style>

</style>