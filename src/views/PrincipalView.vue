<script>
import axios from 'axios';

export default {
  data() {
    return {
      cliente: null
    };
  },
  async created() {
    const clienteID = this.$route.query.clienteID;
    if (clienteID) {
      try {
        const response = await axios.get(`http://localhost:5000/cliente/${clienteID}`);
        this.cliente = response.data;
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
                    <img src="../assets/image 47.png" alt="logo">
                    <h1>Ifood social</h1>
                </div>
                <div class="dados">
                    <div class="foto-perfil">
                        <img src="../assets/foto_perfil.png" alt="perfil">
                    </div>

                    <div class="dados-usuario">
                        <p>{{ cliente ? cliente.NOME_CLIENTE : "" }}</p>
                        <p>Vendedor</p>
                    </div>

                    <div class="menu">
                        <RouterLink to="#"><img src="../assets/menu.png" alt="menu"></RouterLink>
                    </div>
                </div>
            </nav>
            <div>
                <h3>Meus Produtos</h3>
                <div class="produtos-content">
                    <div class="produtos">
                        <div><img src="../assets/hamburguer.jpg" alt="comida"></div>
                        <div><img src="../assets/hamburguer.jpg" alt="comida"></div>
                        <div><img src="../assets/hamburguer.jpg" alt="comida"></div>
                        <div><img src="../assets/hamburguer.jpg" alt="comida"></div>
                        <div><img src="../assets/hamburguer.jpg" alt="comida"></div>
                    </div>

                    <select name="select" id="seus-produtos">
                        <option value="" selected>Seus produtos</option>
                        <option value="produto1">produto1</option>
                        <option value="produto2">produto2</option>
                        <option value="produto3">produto3</option>
                    </select>
                </div>

                <div class="buttons">
                    <RouterLink to="/registrarProduto"><button type="button">Registrar Produto</button></RouterLink>
                    <RouterLink to="#"><button type="button">Editar Produto</button></RouterLink>
                </div>
            </div>
            <hr>

        </div>
        

    </div>
    <nav>

    </nav>
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

    nav .dados-usuario p{
        display: flex;
        flex-direction: column;
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