const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    outputFullName() {
      if (this.name === "") {
        return "";
      }
      return `${this.name} Belo`;
    },

    setName(event) {
      this.name = event.target.value;
    },

    add(num) {
      this.counter = this.counter + num;
    },

    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },

    resetInput() {
      this.name = "";
    },
  },
  computed: {
    fullName() {
      if (this.name === "") {
        return "";
      }
      return `${this.name} Belo`;
    },
  },
});

app.mount("#events");
