<template>
    <header>
        <div class="nav-bar">
            <p>logo</p>
            <ul>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/">Sair</RouterLink>
            </ul>
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
    }

    header .nav-bar p {
        color: white;
    }

    ul{
        gap: 10px;
    }
</style>