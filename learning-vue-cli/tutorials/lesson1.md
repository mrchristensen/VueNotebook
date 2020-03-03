# Lesson 1: Installing and Using the Vue CLI

## Installing Node.js

To use the Vue CLI you need to install Node.js. This is what we'll be using for the back end later.

### For Mac and Linux users

My preferred way to install node is to use
[nvm](https://github.com/creationix/nvm). This lets you install
multiple versions of node simultaneously, in case different apps need
different versions. I don't usually need this, but I prefer nvm
because it makes it easy for me to always get the latest stable
versions of node and npm. It also installs into my local directory,
rather than polluting the globally installed packages.

**If you are on a Mac, be sure to first do this:**

```
touch ~/.bash_profile
```

To install nvm, visit the [nvm](https://github.com/creationix/nvm)
web page and copy installation command that uses curl so you can have
the latest version. For example:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

Then close your terminal, open a new one, and type:

```
nvm install stable
nvm use stable
```

You'll now be using the latest stable versions of node and npm. You
will need to repeat `nvm use` each time you open a terminal.

### For Windows Users

If you use Windows, you can install Node.js by [directly downloading a package](https://nodejs.org/en/download/).

## Installing Vue CLI

Now you can install the Vue CLI using npm. If you are on Mac or Linux, make sure you have the latest version of node activated:

```
nvm use stable
```

Everybody, including Mac, Linux and Windows users do this:

```
npm install -g @vue/cli
```

Notice we are using the `-g` flag here. This will install the Vue CLI globally,
so it is available to all your node projects. You will only need to install
the Vue CLI once, instead of installing it separately for each project.

We are also seeing the `@vue/cli` syntax for the first time. This allows npm
to separate packages into _scopes_, meaning Vue can have a package called `cli`,
and so can other organizations. We specify the scope `@vue` to say we want the
`cli` package from Vue and not from some other organization.

Now that the Vue CLI is installed, we can create a new project:

```
vue create learning-vue-cli
```

This is an interactive tool, so it will ask you a few questions:

- _Please pick a preset_: Use the arrow and enter keys to choose **Manually
  select features**.

- _Check the features needed for your project_: Babel and Linter/Formatter
will be selected. Leave these selected and use the arrow and space keys to choose **Router**. Press enter when you are done.

- _Use history mode for router?_: **Y**

- _Pick a linter / formatter config_: Choose **ESLint with error prevention
  only**. If you don't already use a tool for automatically formatting your
  code, then you may try **ESLint + Prettier**, which will add this for you.

- _Pick additional lint features_: Choose **Lint on save**

- _Where do you prefer placing config for Babel, PostCSS, ESLint, etc?_:
  Choose **In dedicated config files**.

- _Save this as a preset for future projects?_: **Y**

- _Save preset as_: Enter whatever name you like.

It will then install a bunch of plugins for you.

After this completes, you will see these files and folders:

![folders](/screenshots/cli-folders.png)

- babel.config.js: configuration for babel, which compiles code for you

- public: static files for your application, include a basic `index.html`. You can store images for your application here if you like.

- src: JavaScript files you will write and other assets

Let's take a look at the src folder:

![src folder](/screenshots/cli-src-folder.png)

- App.vue -- top-level Vue component for your app

- main.js -- configuration for your app

- router -- configuration for Vue Router

- assets -- images for your app

- components -- single file components for each part of your app

- views -- single file components that
  represent the different pages in your
  app

To understand how this works, your front
end will follow this architecture:

![front end architecture](/images/vue-architecture.png)

We'll go through each of these parts in more details in the next lesson.
