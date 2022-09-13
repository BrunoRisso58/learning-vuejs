<template>
    <img :src="avatar" :alt="descricao">
    <MudarImagem @mudarImagem="mudarImagem" />
</template>

<script>
import MudarImagem from './MudarImagem.vue';

    export default {
        name: "Picture",
        data() {
            return { 
                avatar: "/img/me.jpeg",
                descricao: "Bruno Risso"
            }
        },
        methods: {
            mudarImagem() {
                if (this.avatar == "/img/me.jpeg") {
                    this.avatar = "/img/me2.jpeg"
                } else if (this.avatar == "/img/me2.jpeg") {
                    this.avatar = "/img/me.jpeg"
                }
            }
        },
        components: {
            MudarImagem
        }
    }
</script>