const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      confirmedInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("You've pressed the button!");
    },

    getUserInput(e) {
      this.userInput = e.target.value;
    },

    confirmInput(e) {
      this.confirmedInput = this.userInput;
    },
  },
});

app.mount("#assignment");
