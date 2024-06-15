<script>
import axios from "axios";

  export default {
    data() {
      return {
        COD_EMPREEND_FUNCIONARIO: '',
        TIP_FUNCIONARIO: '',
        COD_EMPREEDIMENTO: '',
        COD_FUNCIONARIO: '',
        IMG_EMPREEND_FUNCIONARIO: null
      };
    },
    methods: {
        handleFileUpload(event) {
            this.IMG_EMPREEND_FUNCIONARIO = event.target.files[0];
        },
      //create new client
      async saveEFuncionario() {
        try {
          await axios.post("http://localhost:5000/createEfuncionario", {
            COD_EMPREEND_FUNCIONARIO: this.COD_EMPREEND_FUNCIONARIO,
            TIP_FUNCIONARIO: this.TIP_FUNCIONARIO,
            COD_EMPREEDIMENTO: this.$route.query.id_empreendimento,
            COD_FUNCIONARIO: this.$route.query.id_funcionario,
            IMG_EMPREEND_FUNCIONARIO: this.IMG_EMPREEND_FUNCIONARIO,
          });
          const cod_funcionario = this.$route.query.id_funcionario;
          const cod_empreendimento =  this.$route.query.id_empreendimento;
          const nome_empreendimento = this.$route.query.nome_empreendimento;
          // Reset form fields
          this.COD_EMPREEND_FUNCIONARIO = '';
          this.TIP_FUNCIONARIO = '';
          this.COD_EMPREEDIMENTO = '';
          this.COD_FUNCIONARIO = '';
          this.IMG_EMPREEND_FUNCIONARIO = null;


          // Navigate to another page or give feedback to the user
        this.$router.push({path:"/principal", query:{cod_funcionario, nome_empreendimento, cod_empreendimento}});
        } catch (err) {
          console.log(err);
        }
      },
    }
    }  
</script>

<template>
    <div>
      <h1>Cadastro de Funcionário do Empreendimento</h1>
      <form @submit.prevent="saveEFuncionario">
        <div>
          <label for="COD_EMPREEND_FUNCIONARIO">Código do Funcionário do Empreendimento:</label>
          <input type="text" v-model="COD_EMPREEND_FUNCIONARIO" id="COD_EMPREEND_FUNCIONARIO" required>
        </div>
        
        <div>
          <label for="TIP_FUNCIONARIO">Tipo de Funcionário:</label>
          <input type="text" v-model="TIP_FUNCIONARIO" id="TIP_FUNCIONARIO" required>
        </div>

        <div>
          <label for="IMG_EMPREEND_FUNCIONARIO">Imagem do Funcionário:</label>
          <input type="file" @change="handleFileUpload" id="IMG_EMPREEND_FUNCIONARIO">
        </div>
  
        <button type="submit">Salvar</button>
      </form>
    </div>
  </template>