<template>
  <div class="home">
    
    <NavBar/>
    <section>
        <CrearProducto/>
    </section>
    <div class="d-flex justify-center">
        <v-btn @click="addToDo()" color="primary">Add ToDo</v-btn>
    </div>

  </div>
  
  
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CrearProducto from "@/components/CrearProducto.vue";
import axios from "axios";

export default {
    name:"CreacionProducto",
    components:{
        NavBar,
        CrearProducto,
    },
    data: () => ({
        newToDo: "hola soy todo",
        uncompletedTodos: [],
        completedTodos: [],
        rutaImagen: ""
    }),
    methods:{
            addToDo() {
        axios.post("http://localhost:3001/productos", {
          todo: this.newTodo
        }).then(response => {
          //this.message = response.data;
          console.log(response.data); 
        });
      },
    },
        
    created() {  //Created se activa cuando se activa la pagina - Es el metodo que se va a utlizar para llenar la lista de tareas completas e incompletas
      // fetch uncompleted task
      axios.get("http://localhost:3000/todo/uncompleted")
      .then(response => (this.uncompletedTodos = response.data)) //La lista que está en data (uncompletedTodos) que estaba vacia, cuando se cargue la pagina ahora va a ser igual al response.data
      .catch(error => console.log(error));
      // fetch completed task
      axios.get("http://localhost:3000/todo/completed")
      .then(response => (this.completedTodos = response.data))
      .catch(error => console.log(error));

      axios.get("http://localhost:3000/todo/completed")
      .then(response => (this.completedTodos = response.data))
      .catch(error => console.log(error));
    },
  }

</script>

<style scoped>

</style>