<template>
    <h1>Meu nome é: {{nome}}</h1>
</template>

<script>
import { createDOMCompilerError } from '@vue/compiler-dom';

    export default {
        name: "LifeCycle",
        data() {
            return {
                nome: "Ainda não sei"
            }
        },
        created() {
            setTimeout(() => {
                this.nome = "Bruno";
            }, 1000)
        },
        mounted() {
            setTimeout(() => {
                this.nome = "Fernando";
            }, 2000)
        }
    }
</script>