<script setup>
import HeaderApp from './components/HeaderApp.vue'
import FooterApp from './components/FooterApp.vue'
import NavBarPrincipal from './components/NavBarPrincipal.vue'
</script>

<template>
    <div id="app">
        <header>
            <nav v-if="$route.path !== '/' ">
                <NavBarPrincipal/>
                
            </nav>
            <nav v-if="$route.path !== '/principal' ">
                <HeaderApp/>
            </nav>

            
        </header> 
        <RouterView/>
        <FooterApp/>
    </div>

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

</style>