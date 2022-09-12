<template>
    <form action="" @submit="enviarFormulario($event)">
        <div>
            <input type="text" v-model="name">
        </div>
        <div>
            <input type="text" v-model="email">
        </div>
        <div>
            <Submit />
        </div>
    </form>
</template>

<script>
import InputText from './form/InputText.vue';
import Submit from './form/Submit.vue';

    export default {
        name: "Form",
        components: {
            InputText,
            Submit
        },
        data() {
            return {
                name: "Bruno",
                email: "bruno@email.com"
            }
        },
        methods: {
            enviarFormulario(e) {
                e.preventDefault();
                alert("Formulário enviado com sucesso!");
                console.log(`Nome: ${this.name}`);
                console.log(`Email: ${this.email}`);
            }
        }
    }
</script>