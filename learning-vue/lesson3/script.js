// create a Vue instance
let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    title: 'Brought to you by JavaScript',
    className: 'red',
    isLoading: true
  },
  methods: {
    toggleLoading() {
      this.isLoading = !this.isLoading;
    }
  }
});