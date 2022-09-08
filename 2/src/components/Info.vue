<template>
    <div>
        <p>Tenho {{age}} anos.</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li>VueJS</li>
            <li>JavaScript</li>
            <li>CSS</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Info",
        data() {
            return { 
                age: 19
            }
        }
    }
</script>