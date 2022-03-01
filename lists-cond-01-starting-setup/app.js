const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoalValue: "",
    };
  },

  methods: {
    addGoal() {
      if (this.enteredGoalValue === "") {
        alert("Please add a goal!");
      } else {
        this.goals.push(this.enteredGoalValue);
        this.enteredGoalValue = "";
      }
    },
  },
});

app.mount("#user-goals");
