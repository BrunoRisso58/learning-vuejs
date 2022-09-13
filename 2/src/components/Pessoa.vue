<template>
    <div>
        <h1>Essa é a descrição de: {{nome}}</h1>
        <Info compEmail="bruno1232@email.com.br" />
        <Form />
    </div>
</template>
<script>
    import Info from './Info.vue';
    import Form from './Form.vue';
    export default {
        name: "Pessoa",
        data() {
            return {
                nome: "Risso"
            }
        },
        components: {
            Info,
            Form
        }
    }
</script>