<template>
    <div>
        <h1>Essa é a descrição de: {{nome}}</h1>
        <Info />
    </div>
</template>
<script>
    import Info from './Info.vue';
    export default {
        name: "Pessoa",
        data() {
            return {
                nome: "Risso"
            }
        },
        components: {
            Info
        }
    }
</script>