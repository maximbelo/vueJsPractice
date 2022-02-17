const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addNum(num) {
      this.counter = this.counter + num;
    },

    subtractNum(num) {
      this.counter === 0 ? null : (this.counter = this.counter - num);
    },
  },
});

app.mount("#events");
