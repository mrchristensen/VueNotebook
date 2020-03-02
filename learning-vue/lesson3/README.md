# Learning Vue 2

You can run this code by:

```
cd lesson3
python3 -m http.server
```

## Lesson 3: Attribute and Class Binding

We're going to show you how to bind attributes to properties in Vue.

### Binding an attribute

To bind an attribute, use the `v-bind` directive:

```
<div id="root">
  <button v-bind:title="title">Hover over me</button>
</div>
```

This tells Vue that the title of the button (which is shown when you hover over it) should be bound to the `title` property.

Let's setup the Vue instance in `script.js` to have this property:

```
let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    title: 'Brought to you by JavaScript'
  },
});
```

Now when you hover over the button, it will show this title. As with other properties, you can change this from Vue Devtools or from the console.

### Shortcut

You can also use the shortcut syntax:

```
<div id="root">
  <button :title="title">Hover over me</button>
</div>
```

### Binding a class name

You can also bind a class of an HTML element to a Vue property. Add this to your HTML:

```
<h1 :class="className">Hello World</h1>
```

This will bind the property `className` to the class of the `h1` element.

Now you can add a property called `className` to Vue in `script.js`:

```
let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    title: 'Brought to you by JavaScript',
    className: 'red'
  },
});
```

You will also need to provide a CSS class in `styles.css`:

```
.red {
  color: #AA1E32;
}
```

This shows how the class binding works. Try adding a new style called `.blue` to styles.css:

```
.blue {
  color: #1AA3E9;
}

```

And then change the value of `className` from the Vue Developer Tools.

### Binding using object syntax

You can also bind a class using JavaScript object syntax if you would like to dynamically toggle the class value.
For example, add the following to `index.html`:

```
<button :class="{ 'blue': isLoading}">Click Me</button>
```

This tells Vue to bind the class of the button to the CSS `.blue` class, but only if the `isLoading` property is true.

Go back to `script.js` and add this property to Vue:

```
let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    title: 'Brought to you by JavaScript',
    className: 'red',
    isLoading: true
  },
});
```

You will see that when the page loads the button has the blue style applied. You can change the `isLoading` property to false in either the console or Vue Developer tools.

### Adding an event listener

Let's add an event listener to toggle this class. Modify your button so it looks like this:

```
<button :class="{ 'blue': isLoading}" @click="toggleLoading">Click Me</button>
```

We are telling Vue that the if the button is clicked it should call the `toggleLoading` method. Let's add this method to Vue in `script.js`:

```
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
```

You should now be able to click the button and toggle the class that it is using.
