<template>
    <div>
        <button @click="ativar">Clique aqui!</button>
        <span v-if="ativou">Ativado!</span>
        <span v-else>Desativado!</span>
    </div>
</template>

<script>
export default {
    name: "Reutilizacao",
    data() {
        return {
            ativou: false
        }
    },
    methods: {
        ativar() {
            this.ativou = !this.ativou;
        }
    }
}
</script>