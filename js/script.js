const { createApp } = Vue

createApp({
  data() {
    return {
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
                text: 'Uscire con Sara',
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
  }
}).mount('#app')