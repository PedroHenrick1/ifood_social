<script setup>
import NavBarPrincipal from '@/components/NavBarPrincipal.vue';
</script>

<script>
import UploadImage from '../components/UploadImage.vue';

export default {
  components: {
    UploadImage
  },
  methods: {
    submitForm() {
      // Lógica de submissão do formulário
    }
  }
};
</script>

<template>

    <div class="container">
        <div >
            <div class="main-content">
                <div class="titulo"><h3>Editar Produtos</h3></div>
                <div class="produtos-content">

                    <UploadImage />
                    
                    <input type="number" placeholder="Código">

                    <input type="text" placeholder="Descrição">

                    <input type="value" placeholder="Valor">

                    <select name="select" id="seus-produtos">
                        <option value="" selected>Categoria</option>
                        <option value="c1">1</option>
                        <option value="c2">2</option>
                        <option value="c3">3</option>
                    </select>
                    
                    <div class="content-checkbox">
                        <div class="disponivel"><p >Diponível?</p></div>
                        <div class="checkbox">
                            <div class="box">
                                <label id="check" for="Sim">Sim</label>
                                <input type="checkbox" id="sim" name="Sim" value="Sim">
                            </div>
                            <div class="box">
                                <label id="check" for="Não">Não</label>
                                <input type="checkbox" id="nao" name="Não" value="Não">
                            </div>
                        </div>
                    </div>
                </div>
                <hr>

                <div class="buttons">
                    <RouterLink to="#"><button type="button">Editar</button></RouterLink>
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
        background: linear-gradient(to right, #fe957b, #8A2D21, #fe957b); 
    }
    .main-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 10px;
        width: 600px;
        height: 750px;
        background-color: #ffffffed;
        padding: 20px
    }

    .titulo {
        border: 3px solid #8A2D21;
        border-radius: 30px;
        margin: 20px 100px;
        padding: 10px 100px;
        font-size: 30px;
        color: rgb(0, 0, 0);
    }

    .titulo h3{
        margin: 0;
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
        gap: 20px;
    }

    .produtos-content select {
        width: 56.7%;
        height: 40px;
        background: #fa6b2e17;
        color: #6e6e7a;
        border-radius: 10px;
        padding: 0 20px;
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
        margin-top: 20px;
    }

    .buttons button {
        color: white;
        border-radius: 10px;
        width: 200px;
        height: 50px;
        border: none;
        background: #8a2d21;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }

    .buttons button:hover {
        background: #FA6A2E;
        color: rgb(255, 255, 255);
    }

    .produtos-content input{
        width: 50%;
        height: 40px;
        background: #fa6b2e17;
        padding: 0 20px;
        color: #6e6e7a;
        border-radius: 10px;
        border: 2px solid #8a2d21ba;
    }

    .produtos-content input:hover{
        background: #fa6b2e46;
    }

    .content-checkbox{
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-right: 110px;
    }

    .content-checkbox p{
        color: #6e6e7a;
        margin: 0;
    }

    .checkbox{
        display: flex;
        gap: 50px;
        color: #6e6e7a;
    }

    .box{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .box #check{
        font-size: 17px;

    }

    input#sim, #nao{
        width: 20px;
        height: 20px;
    }
    
    hr{
        margin-top: 30px;
        width: 75%;
    }

</style>