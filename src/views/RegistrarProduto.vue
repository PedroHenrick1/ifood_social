<template>
    <div>
      <h1>Cadastro de Produto</h1>
      <form @submit.prevent="saveProduto">
        <div class="field">
          <label class="label">Código do Produto</label>
          <div class="control">
            <input
              class="input"
              type="number"
              v-model="COD_PRODUTO"
              placeholder="Código do Produto"
              required
            />
          </div>
        </div>
  
        <div class="field">
          <label class="label">Descrição do Produto</label>
          <div class="control">
            <input
              class="input"
              type="text"
              v-model="DCR_PRODUTO"
              placeholder="Descrição do Produto"
              required
            />
          </div>
        </div>
  
        <div class="field">
          <label class="label">Valor do Produto</label>
          <div class="control">
            <input
              class="input"
              type="number"
              step="0.01"
              v-model="VLR_PRODUTO"
              placeholder="Valor do Produto"
              required
            />
          </div>
        </div>
  
        <div class="field">
          <label class="label">Disponibilidade</label>
          <div class="control">
            <div class="select">
              <select v-model="FLAG_DISPONIVEL" required>
                <option value="" disabled selected>Selecione</option>
                <option value="S">Sim</option>
                <option value="N">Não</option>
              </select>
            </div>
          </div>
        </div>
  
        <div class="field">
          <label class="label">Categoria</label>
          <div class="control">
            <div class="select">
                <select v-model="COD_CATEGORIA" required>
                    <option value="" disabled selected>Selecione</option>
                    <option v-for="categoria in categorias" :key="categoria.COD_CATEGORIA" :value="categoria.COD_CATEGORIA">
                    {{ categoria.DCR_CATEGORIA }}
                    </option>
                </select>
            </div>
          </div>
        </div>
  
        <!-- <div class="field">
          <label class="label">Empreendimento</label>
          <div class="control">
            <div class="select">
                <select v-model="COD_EMPREEDIMENTO" required>
                    <option value="" disabled selected>Selecione</option>
                    <option v-for="empreendimento in empreendimentos" :key="empreendimento.COD_EMPREEDIMENTO" :value="empreendimento.COD_EMPREEDIMENTO">
                    {{ empreendimento.DCR_NOME_FANTASIA }}
                    </option>
                </select>
            </div>
          </div>
        </div> -->
  
        <div class="control">
          <button class="button is-success" type="submit">Salvar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        COD_PRODUTO: "",
        DCR_PRODUTO: "",
        IMG_PRODUTO: "",
        VLR_PRODUTO: "",
        FLAG_DISPONIVEL: "",
        COD_CATEGORIA: "",
        COD_EMPREEDIMENTO: "",
        categorias: [],
        empreendimentos: []
      };
    },
    methods: {
      //create new client
      async saveProduto() {
        try {
          await axios.post("http://localhost:5000/produto", {
            COD_PRODUTO: this.COD_PRODUTO,
            DCR_PRODUTO: this.DCR_PRODUTO,
            IMG_PRODUTO: this.IMG_PRODUTO,
            VLR_PRODUTO: this.VLR_PRODUTO,
            FLAG_DISPONIVEL: this.FLAG_DISPONIVEL,
            COD_CATEGORIA: this.COD_CATEGORIA,
            COD_EMPREEDIMENTO: this.$route.query.cod_empreendimento
        });

        const cod_funcionario = this.$route.query.id;
        const nome_empreendimento = this.$route.query.nome_empreendimento;
        // Reset form fields
        this.COD_PRODUTO = "";
        this.DCR_PRODUTO = "";
        this.IMG_PRODUTO = "";
        this.VLR_PRODUTO = "";
        this.FLAG_DISPONIVEL = "";
        this.COD_CATEGORIA = "";
        this.COD_EMPREEDIMENTO = "";

        alert('Criado com sucesso');
        this.$router.push({ path: "/principal", query: { cod_funcionario, nome_empreendimento } });
        } catch (err) {
          console.log(err);
        }
      },

      async fetchCategorias() {
            try {
                const response = await fetch("http://localhost:5000/categoria");
                const data = await response.json();

                this.categorias = data;

            } catch (err) {
                console.log(err);
            }
        },

        async fetchEmpreendimentos() {
            try {
                const response = await fetch("http://localhost:5000/empreendimento");
                const data = await response.json();

                this.empreendimentos = data;
            } catch (err) {
                console.log(err);
            }
        }
      },
      mounted() {
        this.fetchCategorias();
        this.fetchEmpreendimentos();
      }
    };
  </script>
  
  <style scoped>
  </style>
  