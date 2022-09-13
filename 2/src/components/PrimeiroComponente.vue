<template>
    <div>
        <h1>Olá Vue!</h1>
        <p>Meu nome é {{nome}} e minha profissão é {{profissao}}</p>
    </div>
    <MultiplosEventos />
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue';

    export default {
        name: "PrimeiroComponente",
        data() {
            return {
                nome: "Bruno",
                profissao: "QA"
            }
        },
        components: {
            MultiplosEventos
        }
    }
</script>