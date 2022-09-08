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
    </div>
</template>

<script>
    export default {
        name: "Info",
        data() {
            return { 
                age: 19,
                isWorking: true,
                workWithTechnology: true
            }
        }
    }
</script>