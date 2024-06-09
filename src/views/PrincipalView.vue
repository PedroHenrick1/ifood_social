<script setup>
import NavBarPrincipal from '@/components/NavBarPrincipal.vue';
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
                <div>
                    <div class="produtos">
                        <div><img src="../assets/comida.webp" alt="comida"></div>
                        <div><img src="../assets/comida.webp" alt="comida"></div>
                        <div><img src="../assets/comida.webp" alt="comida"></div>
                        <div><img src="../assets/comida.webp" alt="comida"></div>
                        <div><img src="../assets/comida.webp" alt="comida"></div>
                    </div>
                </div>

            </div>

        </div>
        

    </div>
    <nav>

    </nav>
</template>

<script>
</script>
    

<style scoped>
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
        font-size: 40px;
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

</style>