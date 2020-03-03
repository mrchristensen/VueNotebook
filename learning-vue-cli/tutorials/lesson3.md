# Lesson 3: Building an App

Let's build a simple help ticket application.

## Title

We want to change the title of our application. To do this, edit `public/index.html` and change the title:

```
<title>Tickets</title>
```

## Header

The header for the website is common to all web pages. So we'll modify the `template` section in `src/App.vue` to include a header. We'll also add a div to wrap the pages displayed by the router.

```
<template>
<div id="app">
  <div class="header">
    <h1>Ticket System</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
</div>
</template>
```

We also want to change the styles of the page, so we'll modify the `style` section of `src/App.vue` to have the following:

```
<style>
body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  display: flex;
  justify-content: space-between;
  background: #571845;
  padding: 10px 100px;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #FFC300;
}

.content {
  padding: 10px 100px;
}
</style>
```

If you check the browser, you should see the header:

![header](/screenshots/header.png)

## Storing Tickets

We will eventually be storing data on the back end in a database.
Since we haven't gotten there yet, we'll store data and methods that
operate on that data in a global data source in `main.js`:

```
let data = {
  currentID: 2,
  tickets: [{
    id: 1,
    problem: 'This app is not completely written yet.',
    name: 'Emma'
  }],
  getTickets() {
    return this.tickets;
  },
  addTicket(name, problem) {
    this.tickets.push({
      id: this.currentID,
      name: name,
      problem: problem
    });
    this.currentID += 1;
  }
}
```

The `getTickets` method will return the current list of tickets. The `addTicket`
method will add a new ticket, incrementing `currentID` as needed.

For the rest of the app to use this, we'll need to also modify `main.js` so that
the Vue instance has a reference to this data:

```

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
```

Now we can refer to this data with `this.$route.$data` anywhere in our app.

## Viewing Tickets

We want to show a list of all of the tickets on the home page.

### Template for viewing tickets

Modify the `template` section of `src/views/Home.vue`:

```
<template>
<div>
  <h1>Current Tickets</h1>
  <div v-for="ticket in tickets" v-bind:key="ticket.id">
    <hr>
    <div class="ticket">
      <div class="problem">
        <p>{{ticket.problem}}</p>
        <p><i>-- {{ticket.name}}</i></p>
      </div>
    </div>
  </div>
</div>
</template>
```

The template assumes that the component will have a list of tickets
in the `tickets` variable. It loops through these with the `v-for`
directive. In this loop it uses `v-bind` to set a unique key for
each ticket.

Each ticket has:
* id -- a unique id
* problem -- a description of the problem
* name -- the name of the person submitting the ticket

We format all of these.

### JavaScript for viewing tickets

Likewise, modify the `script` section of `src/views/Home.vue`:

```
<script>
export default {
  name: 'home',
  data() {
    return {}
  },
  computed: {
    tickets() {
      return this.$root.$data.getTickets();
    }
  }
}
</script>
```

Notice that the `script` section contains the Vue code you are used to writing.

This component does one simple thing -- it uses a computed property to get the
list of tickets from the global Vue instance.

You should see the app display the one ticket that we hard coded:

![view tickets](/screenshots/view-tickets.png)

## Creating Tickets

To create tickets, we will add a new page in the application.

## New Component

First, create a new view/component by creating a new file in `views/Create.vue`.
Put this in the `template` section:

```
<template>
<div>
  <h1>Create a Ticket</h1>
  <form v-if="creating" @submit.prevent="addTicket">
    <input v-model="name" placeholder="Name">
    <p></p>
    <textarea v-model="problem"></textarea>
    <br />
    <button type="submit">Submit</button>
  </form>
  <div v-else>
    <p>Thank you for submitting a ticket! We will respond shortly.</p>
    <p><a @click="toggleForm" href="#">Submit another ticket</a></p>
  </div>
</div>
</template>
```

This contains a form to create tickets. The form contains `@submit.prevent` to
prevent the browser from submitting the form, and this also tells Vue to use an `addTicket`
event handler to handle form submission. The form includes an input for the name
of the person submitting the ticket, bound to `name`, and a problem description,
bound to `problem`.

We also include a `v-if` directive in the form and a `v-else` on a div.
This uses the `creating` boolean variable to show the form if we are creating a ticket
or hide it and show a thank you message after the new ticket is created.

In the `script` section of this same file, add:

```
<script>
export default {
  name: 'create',
  data() {
    return {
      creating: true,
      name: '',
      problem: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    addTicket() {
      this.$root.$data.addTicket(this.name, this.problem);
      this.name = "";
      this.problem = "";
      this.creating = false;
    },
  }
}
</script>
```

This code submits the form using a method defined on our global data source and toggles the `creating` variable to show either the form or the thank you message.

Finally, add some CSS that is specific to this view:

```
<style scoped>
input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>
```

## Router

The next step is to setup the router to get to this page. In `src/router/index.js`
add this import:

```
import Create from '../views/Create.vue'
```

and then add this route:

```
    {
      path: '/create',
      name: 'create',
      component: Create,
    }
```

You can delete the route for `About` while you are there.

## Navigation

Finally, modify the navigation in `src/App.vue` to include a new link:

```
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/create">New Ticket</router-link> |
    </div>
```

Notice that this link references the path for `/create`.

## Results

You should now have a page that lets you submit tickets.

![submit tickets](/screenshots/submit-ticket.png)

![thank you](/screenshots/thank-you.png)
