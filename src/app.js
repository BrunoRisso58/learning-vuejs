const MyNameApp = {
    data() { // retorna dados para a aplicação
        return {
            name: "Bruno",
            age: 19
        }
    }
}

Vue.createApp(MyNameApp).mount("#app"); // cria um app vue da constante MyNameApp