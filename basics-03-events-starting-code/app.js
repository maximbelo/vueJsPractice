const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },

    submitForm() {
      alert("Submitted!");
    },

    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },

    addNum(num) {
      this.counter = this.counter + num;
    },

    subtractNum(num) {
      this.counter === 0 ? null : (this.counter = this.counter - num);
    },
  },
});

app.mount("#events");
