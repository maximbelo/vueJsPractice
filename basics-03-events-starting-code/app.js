const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addNum() {
      this.counter++;
    },

    subtractNum() {
      this.counter === 0 ? null : this.counter--;
    },
  },
});

app.mount("#events");
