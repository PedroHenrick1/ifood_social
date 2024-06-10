<template>
    <section>
        <div class="containerLogin">
            <h1>Login</h1>
            <div class="login">
                <form action="">
                    <label for="">Username</label>
                    <input type="text">
                    <label for="">Senha</label>
                    <input type="password">
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    </section>

</template>

<style scoped>
    section{
        display: flex;
        justify-content: center;
    }

    section h1 {
        color: white;
    }

    label {
        color: white;
    }

    section .containerLogin {
        display: flex;
        justify-content: center;
        flex-direction: column;
        background: #790e00de;
        width: 600px;
        height: 700px;
        align-items: center;
        border-radius: 10px;
        box-shadow: 5px 5px #c0bfbf;
        border: none;
    }

    section .login form{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    input {
        height: 40px;
        width: 400px;
        border-radius: 10px;
        border: none;
    }

    button {
        height: 40px;
        width: 400px;
        border-radius: 40px;
        background: #ff6600;
        color: white;
        font-size: 20px;
        font-family: "Josefin Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: weight;
        font-style: normal;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        border: none;
    }

    button:hover {
        color: black;
    }


</style>


