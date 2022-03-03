const app = Vue.createApp({
  data() {
    return {
      taskArray: [],
      userTask: "",
      isHidden: false,
    };
  },

  methods: {
    addTask() {
      if (this.userTask === "") {
        alert("Please enter a task!");
      } else {
        this.taskArray.push(this.userTask);
        this.userTask = "";
      }
    },

    toggleList() {
      this.isHidden = !this.isHidden;
    },
  },

  computed: {
    buttonCaption() {
      return this.isHidden ? "Hide List" : "Show List";
    },
  },
});

app.mount("#assignment");
