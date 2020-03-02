// create a Vue instance
let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    names: ['Emma', 'Brandon', 'Lucy', 'Jorge'],
    newName: ''
  },
  // custom methods
  methods: {
    // addName will add the value of the newName property to the list of names
    addName() {
      if (this.newName === '')
        return;
      this.names.push(this.newName);
      this.newName = "";
    }
  }
});