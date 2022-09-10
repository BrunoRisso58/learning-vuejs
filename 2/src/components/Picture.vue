<template>
    <img :src="avatar" :alt="descricao">
</template>

<script>
    export default {
        name: "Picture",
        data() {
            return { 
                avatar: "/img/me.jpeg",
                descricao: "Bruno Risso"
            }
        }
    }
</script>