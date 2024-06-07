<script setup>
import HeaderApp from './components/HeaderApp.vue'
import FooterApp from './components/FooterApp.vue'
</script>

<template>
  <HeaderApp/>
  <RouterView/>
  <FooterApp/>
</template>

<style scoped>
    * {
        display: block;
        margin: 0;
        padding: 0;
        font-size: 20px;
        font-family: "Josefin Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: weight;
        font-style: normal;
    }

    html {
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
    }

</style>