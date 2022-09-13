<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
        <li v-show="isLogged"><a href="#">Meu Perfil</a></li>
    </ul>
</template>

<script>
    export default {
        name: "Header",
        props: ["isLogged"]
    }
</script>

<style scoped>

    ul {
        background-color: #F7F9F9;
        color: #212F3D;
        display: flex;
        list-style-type: none;
    }

    li {
        padding: 10px
    }

</style>