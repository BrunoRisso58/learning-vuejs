<template>
    <div>
        <h1>Essa é a descrição de: {{nome}}</h1>
        <Info :email="email" :isWorking=true />
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
                nome: "Risso",
                email: "bruno12@email.com"
            }
        },
        components: {
            Info,
            Form
        }
    }
</script>