<template>
    <header>
        <div class="nav-bar">
            <p>logo</p>
            <ul>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/login">Login</RouterLink>
                <RouterLink to="/">Cadastro</RouterLink>
                <RouterLink to="/">Contato</RouterLink>
            </ul>
        </div>
    </header>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');

    body, html {
        margin: 0;
        padding: 0;
        width: 100%;
    }

    header {
        margin-bottom: 20px;
        width: 100%;
    }

    header .nav-bar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 75px;
        width: 100%;
        background: black;
        padding: 0 20px;
        box-sizing: border-box;
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
        margin-right: 20px;
        margin: 0;
        padding: 0;
    }

    header .nav-bar p {
        color: white;
        margin: 0;
    }

    ul{
        gap: 10px;
    }
</style>