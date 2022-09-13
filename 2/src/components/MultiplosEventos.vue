<template>
    <div>
        <button @click="primeiroEvento($event, txt1), segundoEvento($event, txt2), terceiroEvento($event, txt3)">Múltiplos Eventos</button>
        <p>{{ eventMessage }}</p>
    </div>
</template>

<script>
export default {
    name: "MultiplosEventos",
    data() {
        return {
            eventMessage: "",
            txt1: "Primeiro evento",
            txt2: "Segundo evento",
            txt3: "Terceiro evento"
        }
    },
    methods: {
        primeiroEvento(e, txt1) {
            this.eventMessage = txt1;
        },
        segundoEvento(e, txt2) {
            setTimeout(() => {
                this.eventMessage = txt2
            }, 700)
        },
        terceiroEvento(e, txt3) {
            setTimeout(() => {
                this.eventMessage = txt3
            }, 1400)
        }
    }
}
</script>

<style scoped>
    div {
        margin: 100px
    }
</style>