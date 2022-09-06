const MyNameApp = {
    data() { // retorna dados para a aplicação
        return {
            name: "Bruno",
            age: 19,
            input_name: ""
        }
    },
    methods: {
        submitForm(event) {
            event.preventDefault();
            this.name = this.input_name;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app"); // cria um app vue da constante MyNameApp