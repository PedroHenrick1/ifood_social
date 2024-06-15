<script>
import axios from "axios";

  export default {
    data() {
      return {
        COD_FUNCIONARIO: '',
        NOME_FUNCIONARIO: '',
        NUM_TELEFONE: '',
        DCR_EMAIL: ''
      };
    },
    methods: {
      //create new client
      async saveFuncionario() {
        try {
          await axios.post("http://localhost:5000/createFuncionario", {
            COD_FUNCIONARIO: this.COD_FUNCIONARIO,
            NOME_FUNCIONARIO: this.NOME_FUNCIONARIO,
            NUM_TELEFONE: this.NUM_TELEFONE,
            DCR_EMAIL: this.DCR_EMAIL
          });
          const id_funcionario = this.COD_FUNCIONARIO;
          const id_empreendimento =  this.$route.query.cod_empreendimento;
          const nome_empreendimento = this.$route.query.nome_empreendimento;
          console.log(id_empreendimento);
          // Reset form fields
          this.COD_FUNCIONARIO = '';
          this.NOME_FUNCIONARIO = '';
          this.NUM_TELEFONE = '';
          this.DCR_EMAIL = '';
          // Navigate to another page or give feedback to the user
          this.$router.push({path:"/cadastroEfuncionario", query:{id_empreendimento, id_funcionario, nome_empreendimento}});
        } catch (err) {
          console.log(err);
        }
      },
    }
    }  
</script>

<template>
    <div>
      <h1>Cadastro de Funcionário</h1>
      <form @submit.prevent="saveFuncionario">
        <div>
          <label for="COD_FUNCIONARIO">Código do Funcionário:</label>
          <input type="text" v-model="COD_FUNCIONARIO" id="COD_FUNCIONARIO" required>
        </div>
        
        <div>
          <label for="NOME_FUNCIONARIO">Nome do Funcionário:</label>
          <input type="text" v-model="NOME_FUNCIONARIO" id="NOME_FUNCIONARIO" required>
        </div>
  
        <div>
          <label for="NUM_TELEFONE">Número de Telefone:</label>
          <input type="text" v-model="NUM_TELEFONE" id="NUM_TELEFONE" required>
        </div>
  
        <div>
          <label for="DCR_EMAIL">Email:</label>
          <input type="email" v-model="DCR_EMAIL" id="DCR_EMAIL" required>
        </div>
  
        <button type="submit">Salvar</button>
      </form>
    </div>
  </template>