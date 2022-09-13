<template>
    <Reutilizacao />
    <div>
        <h1>Olá Vue!</h1>
        <p>Meu nome é {{nome}} e minha profissão é {{profissao}}</p>
    </div>
    <Reutilizacao />
    <MultiplosEventos />
    <Reutilizacao />
    <Reutilizacao />
    <Reutilizacao />
    <Reutilizacao />
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue';
import Reutilizacao from './Reutilizacao.vue';

    export default {
        name: "PrimeiroComponente",
        data() {
            return {
                nome: "Bruno",
                profissao: "QA"
            }
        },
        components: {
            MultiplosEventos,
            Reutilizacao
        }
    }
</script>