<template>
  <div class="home">
    
    <NavBar/>
    <section>
        <CrearEmpleado/>
    </section>

  </div>
  
  
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CrearEmpleado from "@/components/CrearEmpleado.vue";


export default {
    name:"CreacionEmpleado",
    components:{
        NavBar,
        CrearEmpleado,
    },
}
</script>

<style scoped>

</style>