<script>
import axios from 'axios';

export default {
  data() {
    return {
      funcionario: null,
      empreendimento: this.$route.query.nome_empreendimento,

    };
  },
  methods: {
    RedirectRegistrar() {
        const id  = this.$route.query.cod_funcionario;
        const cod_empreendimento = this.$route.query.cod_empreendimento;
        const nome_empreendimento = this.$route.query.nome_empreendimento;
        this.$router.push({path:"/registrarProduto", query:{id, cod_empreendimento, nome_empreendimento}});
    }
  },
  async created() {
    const clienteID = this.$route.query.cod_funcionario;
    if (clienteID) {
      try {
        const response = await axios.get(`http://localhost:5000/funcionario/${clienteID}`);
        this.funcionario = response.data;
      } catch (err) {
        console.error("Erro ao buscar os dados do cliente:", err);
      }
    }
  }
};
</script>

<template>

    <div class="container">
        <div class="main-content">
        <nav>
            <div class="logo">
            <img src="../assets/image 47.png" alt="logo" />
            <h1>{{ empreendimento }}</h1>
            </div>
            <div class="dados">
                <div class="dados-usuario">
                    <p>{{ funcionario ? funcionario.NOME_FUNCIONARIO : "" }}</p>
                </div>
            </div>
        </nav>
        <div class="dados_totais">
            <h3>Área de registro de Produtos</h3>
            <p>Nesta página, você pode apertar em "Registrar Produtos" onde você poderá registrar produtos para o seu empreendimento. Ao entrar na página, você encontrará um formulário simples onde você pode inserir os detalhes do produto, incluindo o nome, valor do produto e outras coisas mais.</p>
            <div class="buttons">
                <button type="button" @click="RedirectRegistrar">Registrar Produto</button>
            </div>
        </div>
        <hr />
        </div>
    </div>
</template>

<script>
</script>
    

<style scoped>

    * {
        font-size: 25px;
        font-family: "Josefin Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: weight;
        font-style: normal;
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .main-content{
        border-radius: 10px;
        width: 800px;
        height: 700px;
        background: #790e00de;
    }
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #d9d9db;
    }

    nav .logo {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    nav .logo h1{
        font-size: 50px;
        text-decoration: underline;
    }
    nav .logo img {
        width: 100px;
        height: 100px;
        margin-left: 10px;
    }

    nav .foto-perfil img{
        width: 75px;
        height: 75px;
        border-radius: 100px;

    }

    nav .foto-perfil {
        display: flex;
        align-items: center;
    }

    div .dados_totais {
        display: flex;

        justify-content: center;
        flex-direction: column;
    }

    div .dados_totais h3{
        display: flex;
        position: relative;
        right: 50px;
        justify-content: center;
    }

    div .dados_totais p {
        display: flex;
        justify-content: center;
        margin-left: 50px;
        margin-right: 50px;
    }

    nav .dados-usuario p{
        display: flex;
        flex-direction: column;
        margin-right: 30px;
    }
    nav .menu {
        margin-right: 10px;
    }

    nav .menu img{
        display: flex;
        justify-content: baseline;
    }

    nav .dados {
        display: flex;
        gap: 20px;
    }

    h3 {
        margin-left: 90px;
        font-size: 30px;
        color: white;
    }

    .produtos {
        display: flex;
        flex-direction: row;
        gap: 30px;
        justify-content: center;
    }

    .produtos img {
        width: 100px;
        height: 100px;
        border-radius: 100px; 

    }

    .produtos-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .produtos-content select {
        width: 75%;
        height: 40px;
        margin-top: 60px;
        background: #d9d9db;
        color: #6e6e7a;
        border-radius: 10px;
        border: none;

        cursor: pointer;
    }

    .buttons {
        display: flex;
        justify-content: center;
        gap: 100px;
        margin-top: 100px;
    }

    .buttons button {
        color: white;
        border-radius: 10px;
        width: 200px;
        height: 50px;
        border: none;
        background: rgba(75, 31, 154, 1);
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

    .buttons button:hover {
        background: #d9d9db;
        color: black;
    }

    hr {
        margin-top: 60px;
        width: 75%;
    }

</style>