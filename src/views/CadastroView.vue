<template>
    <div>
      <div class="field">
        <label class="label">Código do Cliente</label>
        <div class="control">
          <input
            class="input"
            type="number"
            placeholder="Código do Cliente"
            v-model="COD_CLIENTE"
          />
        </div>
      </div>
  
      <div class="field">
        <label class="label">Nome</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Nome"
            v-model="NOME_CLIENTE"
          />
        </div>
      </div>
  
      <div class="field">
        <label class="label">Endereço</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Endereço"
            v-model="DCR_ENDERECO"
          />
        </div>
      </div>
  
      <div class="field">
        <label class="label">Complemento</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Complemento"
            v-model="DCR_COMPLEMENTO"
          />
        </div>
      </div>
  
      <div class="field">
        <label class="label">CEP</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="CEP"
            v-model="NUM_CEP"
          />
        </div>
      </div>
  
      <div class="field">
        <label class="label">Código da Cidade</label>
        <div class="control">
          <input
            class="input"
            type="number"
            placeholder="Código da Cidade"
            v-model="COD_CIDADE"
          />
        </div>
      </div>
  
      <div class="field">
        <label class="label">Código do Bairro</label>
        <div class="control">
          <input
            class="input"
            type="number"
            placeholder="Código do Bairro"
            v-model="COD_BAIRRO"
          />
        </div>
      </div>
  
      <div class="field">
        <label class="label">Código da Localidade</label>
        <div class="control">
          <input
            class="input"
            type="number"
            placeholder="Código da Localidade"
            v-model="COD_LOCALIDADE"
          />
        </div>
      </div>
  
      <div class="control">
        <button class="button is-success" @click="saveCliente">Salvar</button>
      </div>
    </div>
  </template>
  
  <script>
  //import axios
  import axios from "axios";
  export default {
    data() {
      return {
        COD_CLIENTE: "",
        NOME_CLIENTE: "",
        DCR_ENDERECO: "",
        DCR_COMPLEMENTO: "",
        NUM_CEP: "",
        COD_CIDADE: "",
        COD_BAIRRO: "",
        COD_LOCALIDADE: ""
      };
    },
    methods: {
      //create new client
      async saveCliente() {
        try {
          await axios.post("http://localhost:5000/creatCliente", {
            COD_CLIENTE: this.COD_CLIENTE,
            NOME_CLIENTE: this.NOME_CLIENTE,
            DCR_ENDERECO: this.DCR_ENDERECO,
            DCR_COMPLEMENTO: this.DCR_COMPLEMENTO,
            NUM_CEP: this.NUM_CEP,
            COD_CIDADE: this.COD_CIDADE,
            COD_BAIRRO: this.COD_BAIRRO,
            COD_LOCALIDADE: this.COD_LOCALIDADE
          });
          const clienteID = this.COD_CLIENTE; // Dependendo de como seu backend retorna o ID do cliente
          // Reset form fields
          this.COD_CLIENTE = "";
          this.NOME_CLIENTE = "";
          this.DCR_ENDERECO = "";
          this.DCR_COMPLEMENTO = "";
          this.NUM_CEP = "";
          this.COD_CIDADE = "";
          this.COD_BAIRRO = "";
          this.COD_LOCALIDADE = "";


          
          // Navigate to another page or give feedback to the user
          this.$router.push({path:"/principal", query:{clienteID}});
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>