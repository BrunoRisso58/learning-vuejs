<template>
    <div>
        <p v-if="isWorking">Estou trabalhando no momento!</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <div v-show="workWithTechnology">
            <p>Utilizo as seguintes tecnologias:</p>
            <ul>
                <li>VueJS</li>
                <li>JavaScript</li>
                <li>CSS</li>
            </ul>
        </div>
        <button @click="showOrHideEmail">{{ showEmailButtonMsg }}</button>
        <p v-show="showEmail">Entre um contato! Mande um e-mail para {{ email }}</p>
    </div>
    <Picture />
</template>

<script>
    import Picture from "./Picture.vue";

    export default {
        name: "Info",
        data() {
            return {
                age: 19,
                isWorking: true,
                workWithTechnology: true,
                showEmail: false,
                showEmailButtonMsg: "Mostrar Email",
                email: "brunorisso58@gmail.com"
            }
        },
        components: {
            Picture
        },
        methods: {
            showOrHideEmail() {
                this.showEmail = !this.showEmail;
                if (this.showEmail) {
                    this.showEmailButtonMsg = "Ocultar Email";
                } else {
                    this.showEmailButtonMsg = "Mostrar Email";
                }
            }
        }
    }
</script>