<template>
    <form @submit.prevent="saveEmpreendimento">
      <div class="containerForm">
      <h1>Cadastro de Empreendimento</h1>
      <div class="form">
        <div class="field">
          <label class="label">Código do Empreendimento</label>
          <div class="control">
            <input
              class="input"
              type="number"
              placeholder="Código do Empreendimento"
              v-model="COD_EMPREEDIMENTO"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Descrição do Empreendimento</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Descrição do Empreendimento"
              v-model="DCR_EMPREENDIMENTO"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Nome Fantasia</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Nome Fantasia"
              v-model="DCR_NOME_FANTASIA"
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
          <label class="label">Imagem do Empreendimento</label>
          <div class="control">
            <input
              class="input"
              type="file"
              @change="onFileChange"
            />
          </div>
        </div>
        <div class="field">
            <label class="label">Cidade</label>
            <div class="control">
              <div class="select">
                  <select v-model="COD_CIDADE" required>
                      <option value="" disabled selected>Selecione</option>
                      <option v-for=" cidade in cidades" :key="cidade.COD_CIDADE" :value="cidade.COD_CIDADE">
                      {{ cidade.DCR_CIDADE }}
                      </option>
                  </select>
              </div>
            </div>
          </div>
    
          <div class="field">
            <label class="label">Bairro</label>
            <div class="control">
              <div class="select">
                  <select v-model="BAIRRO_COD_BAIRRO" required>
                      <option value="" disabled selected>Selecione</option>
                      <option v-for=" bairro in bairros" :key="bairro.COD_BAIRRO" :value="bairro.COD_BAIRRO">
                      {{ bairro.DCR_BAIRRO }}
                      </option>
                  </select>
              </div>
            </div>
          </div>
    
          <div class="field">
            <label class="label">Localidade</label>
            <div class="control">
              <div class="select">
                  <select v-model="COD_LOCALIDADE" required>
                      <option value="" disabled selected>Selecione</option>
                      <option v-for=" localidade in localidades" :key="localidade.COD_LOCALIDADE" :value="localidade.COD_LOCALIDADE">
                      {{ localidade.DCR_LOCALIDADE }}
                      </option>
                  </select>
              </div>
            </div>
          </div>    
          <div class="control">
            <button class="button is-success" type="submit">Salvar</button>
          </div>
        </div>
      </div>
    </form>
      
  </template>
  
  <script>
  //import axios
  import axios from "axios";
  export default {
    data() {
      return {
        COD_EMPREEDIMENTO: "",
        DCR_EMPREENDIMENTO: "",
        DCR_NOME_FANTASIA: "",
        DCR_ENDERECO: "",
        DCR_COMPLEMENTO: "",
        NUM_CEP: "",
        COD_CIDADE: "",
        BAIRRO_COD_BAIRRO: "",
        COD_LOCALIDADE: "",
        IMG_EMPREENDIMENTO: null,
        cidades: [],
        bairros: [],
        localidades: []
      };
    },
    methods: {
      //create new client
      async saveEmpreendimento() {
        try {
          await axios.post("http://localhost:5000/createEmpreendimento", {
            "COD_EMPREEDIMENTO": this.COD_EMPREEDIMENTO,
            "DCR_EMPREENDIMENTO": this.DCR_EMPREENDIMENTO,
            "DCR_NOME_FANTASIA": this.DCR_NOME_FANTASIA,
            "DCR_ENDERECO": this.DCR_ENDERECO,
            "DCR_COMPLEMENTO": this.DCR_COMPLEMENTO,
            "NUM_CEP": this.NUM_CEP,
            "COD_CIDADE": this.COD_CIDADE,
            "BAIRRO_COD_BAIRRO": this.BAIRRO_COD_BAIRRO,
            "COD_LOCALIDADE": this.COD_LOCALIDADE,
            "IMG_EMPREENDIMENTO": this.IMG_EMPREENDIMENTO,
          });
          const cod_empreendimento = this.COD_EMPREEDIMENTO;
          const nome_empreendimento = this.DCR_NOME_FANTASIA;


          this.COD_EMPREEDIMENTO = "";
          this.DCR_EMPREENDIMENTO = "";
          this.DCR_NOME_FANTASIA = "";
          this.DCR_ENDERECO = "";
          this.DCR_COMPLEMENTO = "";
          this.NUM_CEP = "";
          this.COD_CIDADE = "";
          this.BAIRRO_COD_BAIRRO = "";
          this.COD_LOCALIDADE = "";
          this.IMG_EMPREENDIMENTO = null;


          this.$router.push({path:"/cadastroFuncionario", query:{cod_empreendimento, nome_empreendimento}});
        } catch (err) {
          console.log(err);
        }
      },
      async fetchCidade() {
            try {
                const response = await fetch("http://localhost:5000/cidade");
                const data = await response.json();
                this.cidades = data;

            } catch (err) {
                console.log(err);
            }
        },

        async fetchBairro() {
            try {
                const response = await fetch("http://localhost:5000/bairro");
                const data = await response.json();
                this.bairros = data;

            } catch (err) {
                console.log(err);
            }
        },

        async fetchLocalidade() {
            try {
                const response = await fetch("http://localhost:5000/localidade");
                const data = await response.json();
                this.localidades = data;

            } catch (err) {
                console.log(err);
            }
        },
    },
    mounted() {
      this.fetchCidade();
      this.fetchBairro();
      this.fetchLocalidade();
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>