<template>
    <Cabecalho />
    <PrimeiroComponente />
    <LifeCycle />
    <Pessoa />
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycle from './components/LifeCycle.vue';
import Pessoa from './components/Pessoa.vue';
import Cabecalho from './components/Cabecalho.vue';

    export default {
        name: 'App',
        components: {
            PrimeiroComponente,
            LifeCycle,
            Pessoa,
            Cabecalho
        }
    }
</script>

<style>

    body {
        background-color: #212F3D;
        color: #F7F9F9
    }

    a {
        color: red;
        text-decoration: none
    }

</style>