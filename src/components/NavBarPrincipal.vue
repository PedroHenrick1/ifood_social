<template>
    <header>
        <div class="nav-bar">
            <div class="logo">
                <img src="/src/assets/image 47.png" alt="logo">
                <p>Ifood_Social</p>
            </div>
            <div class="menu">
                <ul>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/">Sair</RouterLink>
                </ul>
                <img src="/src/assets/menu-navigation.svg" alt="menu">
            </div>
        </div>
    </header>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');

    header {
        margin-bottom: 20px;
    }

    header .nav-bar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 75px;
        background: black;
        padding: 0 20px;
        border-radius: 10px 10px 0 0;
    }

    header .nav-bar .logo{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 11px;
    }

    header .nav-bar .logo img{
        width: 40px;
        cursor: pointer;
    }

    header .nav-bar .menu{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 15px;
    }

    header .nav-bar .menu img{
        width: 25px;
        cursor: pointer;
    }

    header .nav-bar ul a{
        color: white;
        text-decoration: none;
        transition: 0.3s ease-in-out;
    }

    header .nav-bar ul a:hover {
        text-decoration: underline;
    }

    header .nav-bar ul{
        display: flex;
        gap: 10px;
    }

    header .nav-bar p {
        color: white;
    }

    ul{
        gap: 10px;
    }
</style>