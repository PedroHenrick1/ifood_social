<template>
    <body>
    <div class="form-container">
        <h1>Cadastro de Clientes</h1>
        <form action="/submit-your-form-handler" method="POST">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
            
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" required>
            
            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" name="telefone" pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" required>
            
            <label for="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" required>
            
            <button type="submit">Cadastrar</button>
        </form>
    </div>
</body>
</template>

<style scoped>

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.form-container {
    width: 100%;
    max-width: 400px;
    background: #790e00de;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 5px 10px rgb(99, 99, 98);
}

h1 {
    color: #ffffff;
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center; 
}

label {
    color: #ffffff;
    margin-top: 10px;
    margin-bottom: 5px; 
    align-self: center; 
}

input[type="text"],
input[type="email"],
input[type="tel"] {
    width: 75%; 
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    align-self: center; 
}

button {
    background-color: #ff6600;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    width: 50%; 
    align-self: center;
}

button:hover {
    color: #000000;
}

</style>