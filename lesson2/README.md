# Learning Vue 2

You can run this code by:

```
cd lesson2
python3 -m http.server
```

## Lesson 2: Lists and Event Listeners

We're going to show you how to render lists of items in Vue and how to add event listeners.

### Creating an array of names

Create a Vue instance in `script.js` that contains a list of names:

```
let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    names: ['Emma', 'Brandon', 'Lucy', 'Jorge']
  }
});
```

The `data` property, is an object, and in this case we've create a property called `names` that contains an array.

### Rendering the list of names

In `index.html`, use the `v-for` directive to loop through the elements:

```
<div id="root">
  <ul>
    <!-- Loop through each name in names and render it. This will create a set of li elements -->
    <li v-for="name in names">{{name}}</li>
  </ul>
</div>
```

You can also use the `v-text` directive instead of the mustache syntax:

```
<div id="root">
  <ul>
      <!-- This is the same, but we are using the v-text directive instead -->
      <li v-for="name in names" v-text="name"></li>
  </ul>
</div>
```

You should be able to use both the Vue Devtools and the console to modify these, as in the previous lesson. Here is how to do it in the console:

```
app.names.push('Alicia');
```

### Modifying the list of names

To let the user add names to the list, create an input field and a button as shown below:

```
  <div id="root">
    <ul>
      <!-- Loop through each name in names and render it. This will create a set of li elements. The v-text
      directive will set the list element value to the name -->
      <li v-for="name in names" v-text="name"></li>
    </ul>
    <!-- Let the user enter a new name and bind it to the newName property -->
    <input type="text" v-model="newName">
    <!-- Create an event handler for the click event -->
    <button v-on:click="addName">Add Name</button>
  </div>
```

The `v-model` directive binds the input field to the `newName` property on the `data` object. The `v-on` directive tells Vue that it should call an event handler called `addName` when the button is clicked.

In `script.js`, add the new property and method:

```
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
```

We add the `newName` property to the data object. We add the `addName` method in a `methods` object. It can use `this.newName` to reference the property for the new name and `this.names` to reference the property for the names.

You should now be able to add names to the list.

You can bind any JavaScript event this way.

### Shortcut

You can also use this syntax in `index.html` to bind the method:

```
<button @click="addName">Add Name</button>
```

Notice the use of `@` instead of `v-on`.
