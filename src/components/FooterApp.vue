<template>
    <footer>
        <div class="footer-bar">
            <p>© 2024 - Todos os direitos reservados | COLCIC</p>
        </div>
    </footer>

</template>

<script>

export default {
    name: "Footer"
}

</script>


<style scoped>
    footer {
        margin-top: 15px;
        display: flex;
        justify-content: center;
        bottom: 0;
        background: black;
        width: 100%;
    }
    footer .footer-bar p{
        color: white;
    }
</style>