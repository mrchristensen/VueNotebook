# Learning Vue 2

You can run this code by:

```
cd lesson4
python3 -m http.server
```

## Lesson 4: Computed properties

Sometimes, you want to show data that is computed from Vue properties. Vue provides an easy way to do this.

### Using a computed property

First, let's imagine we want this in `index.html`:

```
<div id="root">
  <p> {{ message }}</p>
  <p>I said, {{ screaming }}</p>
</div>
```

For the property called `screaming`, we want to repeat the `message` property, but convert it to uppercase.
Our Vue instance in `script.js` looks like this:

```
let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    message: 'I really like bread',
  }
});
```

We could manually add a second property for `screaming`, but keeping it in sync with `message` would be a pain. Instead, we will add a computed property:

```
let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    message: 'I really like bread',
  },
  computed: {
    screaming() {
      return this.message.toUpperCase();
    }
  }
});
```

A computed property is a function that returns a value to use for the property. Vue will _automatically_ track dependencies. So in this case, every time `message` changes, Vue will recompute `screaming`.

You can change `message` in Vue Developer Tools or on the console to see how is works.

### Another example

Suppose you wanted to keep track of a list of tasks to do. Let's add some tasks to Vue:

```
let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    message: 'I really like bread',
    tasks: [{
        description: "Create some loaves of bread",
        completed: true
      },
      {
        description: "Create some fish",
        completed: true
      },
      {
        description: "Create more loaves of bread",
        completed: false,
      },
      {
        description: "Create more fish",
        completed: false
      },
      {
        description: "Create more loaves of bread",
        completed: false
      },
      {
        description: "Tell Peter to clean up the mess",
        completed: false
      }
    ]
  },
  computed: {
    screaming() {
      return this.message.toUpperCase();
    },
  }
});
```

We already know how to loop through those tasks. In our HTML, that would look like this:

```
<h1>Tasks</h1>
<ul>
  <li v-for="task in tasks" v-text="task.description"></li>
</ul>
```

If you refresh the page, you'll see your tasks formatted there.

What if we want to separately show just the incomplete tasks? Add this to your HTML:

```
<h1>Incomplete Tasks</h1>
<ul>
  <li v-for="task in incompleteTasks" v-text="task.description"></li>
</ul>
```

We're going to use a computed property to get a list of only those tasks that are marked as not yet complete. In Vue, add this new computed property:

```
computed: {
  screaming() {
    return this.message.toUpperCase();
  },
  incompleteTasks() {
    return this.tasks.filter(task => !task.completed);
  }
}
```

You should now see a second list of tasks, but it includes only the tasks that are not yet complete.

### Benefits of computed properties

1. Computed properties automatically update when the data they depend on changes.

1. Computed properties are cached if the data doesn't change. Vue only updates the portion of the DOM that changes.
