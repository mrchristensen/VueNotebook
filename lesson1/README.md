# Learning Vue 2

You can run this code by:

```
cd lesson1
python3 -m http.server
```

## Lesson 1: Data Binding and Vue Development Tools

Vue stores data in an object called `data`. Recall that JavaScript objects contain a collection of properties, each of which can contain any data type.

Data binding in Vue allows you to assign a property to an element in the DOM. This is a _two-way_ binding. Whenever the value of the property changes, the DOM is updated. Whenever the user changes the DOM (e.g., by entering data in an input element), the property changes.

### Loading Vue

The first step is to load the Vue JavaScript library in `index.html`. We can do this by visiting the [Vue Installation](https://vuejs.org/v2/guide/installation.html) page, finding the section on CDNs, and copying the following:

```
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

### HTML root element

Your HTML needs a root element. Vue will control the DOM inside this element. For example, we'll use:

```
<div id="root">
</div>
```

### Vue instance

Create a Vue instance in `script.js` that controls the root element:

```
let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    message: 'Hello World',
  }
});
```

This tells Vue that it can change the DOM inside of the `#root` div. It also creates a data object that it can use in data bindings.

### Create a data binding

Inside the `#root` div, do the following:

```
<div id="root">
    <!-- data binding using the v-model directive -->
    <input type="text" v-model="message">
    <!-- template using mustache syntax -->
    <p>The value of the input is: {{ message }}.</p>
</div>
```

This creates two interactions with Vue. The first uses the `v-model` directive, to create a data binding, telling Vue that the `message` property is bound to the input element. The second uses mustache template syntax to print out the contents of the `message` property.

You should be able to change the input value in the browser. This will change the value of the `message` property, and thus simultaneously update the template as well.

You can also assign new values to properties in the console. Since we created a variable called `app` to reference the Vue instance, we can change properties like this:

```
app.message = "wow, crazy";
```

### Using Vue Development Tools

Install Vue Development Tools for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/) or [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en).

Once you've done this, reload the application in your browser and open the developer console. You should see a new Vue tab and logo.

Click on the `Vue` tab and then click on `Root` in the window below. You should see your data on the right. It will update as you change it in the browser, and vice versa.

![screenshot showing Vue devtools](https://github.com/BYU-CS-260-Winter-2019/learning-vue/blob/master/lesson1/images/devtools.png)
