const app = Vue.createApp({
  data() {
    return {
      myName: "Pickle Rick",
      myAge: "Over 9000",
      myAgeInFiveYears: "9005",
      pickleRick:
        "https://upload.wikimedia.org/wikipedia/en/5/53/Pickle_Rick.jpg",
    };
  },

  methods: {
    randNum() {
      const number = Math.random();
      return number;
    },
  },
});

app.mount("#assignment");
