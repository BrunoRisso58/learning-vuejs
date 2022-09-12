<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
    </ul>
</template>

<script>
    export default {
        name: "Header",
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