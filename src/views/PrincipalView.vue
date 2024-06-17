<script setup>
import NavBarPrincipal from '@/components/NavBarPrincipal.vue';
</script>

<template>

    <div class="container">
        <div class="main-content">
            <nav>
                <div class="logo">
                    <img src="../assets/image 47.png" alt="logo">
                    <h1>Ifood_Social</h1>
                </div>
                <div class="dados">
                    <div class="foto-perfil">
                        <img src="../assets/foto_perfil.png" alt="perfil">
                    </div>

                    <div class="dados-usuario">
                        <p>Pedro Henrick</p>
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
                    <RouterLink to="#"><button type="button">Registrar Produto</button></RouterLink>
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
        background: #790e00c1;
        width: 100%;
        height: 100%;
        padding: 20px 0;
    }
    .main-content{
        border-radius: 10px;
        width: 90%;
        height: 700px;
        background: #ffffffe7;
    }
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 0;
    }

    nav .logo {
        display: flex;
        gap: 10px;
        align-items: center;
    }
    nav .logo h1{
        font-size: 30px;
    }
    nav .logo img {
        width: 50px;
        height: 50px;
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
        margin: 10px 0 0 0;
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
        color: rgb(62, 62, 62);
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
        background: #fa6b2e17;
        color: #6e6e7a;
        border-radius: 10px;
        border: 2px solid #8a2d21ba;
        cursor: pointer;
    }

    .produtos-content select:hover {
        background: #fa6b2e46;
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
        width: 250px;
        height: 50px;
        border: none;
        background: #8a2d21;
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