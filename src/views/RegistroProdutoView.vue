<script setup>
import NavBarPrincipal from '@/components/NavBarPrincipal.vue';
</script>

<template>

    <div class="container">
        <div class="main-content">
            <div>
                <h3>Cadastrar Produtos</h3>
                <hr>
                <div class="produtos-content">
                    <div class="produtos">
                        <div><img src="../assets/hamburguer.jpg" alt="comida"></div>
                    </div>

                    <select name="select" id="seus-produtos">
                        <option value="" selected>Código do Produto</option>
                        <option value="produto1">produto1</option>
                        <option value="produto2">produto2</option>
                        <option value="produto3">produto3</option>
                    </select>

                    <input type="text">

                    <input type="text">

                    <input type="text">

                    <select name="select" id="seus-produtos">
                        <option value="" selected>Seus produtos</option>
                        <option value="produto1">produto1</option>
                        <option value="produto2">produto2</option>
                        <option value="produto3">produto3</option>
                    </select>

                    <select name="select" id="seus-produtos">
                        <option value="" selected>Seus produtos</option>
                        <option value="produto1">produto1</option>
                        <option value="produto2">produto2</option>
                        <option value="produto3">produto3</option>
                    </select>

                    <select name="select" id="seus-produtos">
                        <option value="" selected>Categoria</option>
                        <option value="produto1">1-</option>
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
        width: 100%;
        height: 100%;
        padding: 20px;
        background-color: #fa6b2edb;
    }
    .main-content{
        border-radius: 10px;
        width: 800px;
        height: 700px;
        background-color: #ffffffde;
        padding: 20px
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
        border-radius: 50px; 

    }

    .produtos-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .produtos-content select {
        width: 50%;
        height: 40px;
        margin-top: 20px;
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
        margin-top: 30px;
    }

    .buttons button {
        color: white;
        border-radius: 10px;
        width: 200px;
        height: 50px;
        border: none;
        background: #FA6A2E;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

    .buttons button:hover {
        background: #d9d9db;
        color: black;
    }

    input{
        width: 50%;
        height: 40px;
        margin-top: 20px;
        background: #d9d9db;
        color: #6e6e7a;
        border-radius: 10px;
        border: none;
        cursor: pointer;

    }

    hr {
        margin-top: 30px;
        width: 75%;
    }

</style>