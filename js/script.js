const { createApp } = Vue

createApp({
  data() {
    return {
        newTaskText: '',
        newTask: {
            text: '',
            done: false
        },
        todolist:[
            {
                text: 'Leggere un libro',
                done: false,
            },
            {
                text: 'Mangiare una pizza',
                done: true,
            },
            {
                text: 'Uscire con Pippo',
                done: false,
            },
            {
                text: 'Ordinare i regali di natale',
                done: false,
            },
            {
                text: 'Dare da mangiare al cane',
                done: true,
            },
            {
                text: 'Pulire il pavimento',
                done: false,
            }
        ]
    }
  },

  methods: {

    deleteTask(index){
        this.todolist.splice(index,1);
    },

    addTask(){
        let addedTask = {
            text: this.newTaskText,
            done: false
        }
        this.todolist.push(this.newTaskText);
        this.newTask = '';
    }

  }
}).mount('#app')