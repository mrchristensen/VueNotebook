// create a Vue instance
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
        incompleteTasks() {
            return this.tasks.filter(task => !task.completed);
        },
        completedTasks() {
            return this.tasks.filter(task => task.completed == true)
        }
    }
});