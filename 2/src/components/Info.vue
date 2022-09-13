<template>
    <div>
        <p>{{ compEmail }} - {{ email }}</p>
        <p v-if="isWorking">Estou trabalhando no momento!</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <div v-show="workWithTechnology">
            <p>Tecnologias no backend:</p>
            <ul>
                <li v-for="(technology, index) in backendTechnologies" v-bind:key="index">{{ technology }}</li>
            </ul>
            <p>Tecnologias no frontend:</p>
            <ul>
                <li v-for="technology in frontendTechnologies" v-bind:key="technology.id">{{ technology.nome }}</li>
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
                email: "brunorisso79@email.com",
                backendTechnologies: ["PHP", "Laravel", "MySQL"],
                frontendTechnologies: [
                    {id: 0, nome: "NuxtJS"},
                    {id: 1, nome: "VueJS"},
                    {id: 2, nome: "Tailwind CSS"}
                ]
            }
        },
        props: {
            compEmail: String
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