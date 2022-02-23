const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullName: "",
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
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return `${this.name} ${this.lastName}`;
    },
  },

  watch: {
    // name(value) {
    //   if (value === "") {
    //     fullName = "";
    //   } else {
    //     this.fullName = `${value} ${this.lastName}`;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     fullName = "";
    //   } else {
    //     this.fullName = `${this.name} ${value}`;
    //   }
    // },
  },
});

app.mount("#events");
