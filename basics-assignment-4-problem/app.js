const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      hidden: false,
      inputBackgroundColor: "",
    };
  },
  computed: {
    paraClasses() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        hidden: this.hidden,
        visible: !this.hidden,
      };
    },
  },
  methods: {
    hideParagraph() {
      this.hidden = !this.hidden;
    },
  },
});

app.mount("#assignment");
