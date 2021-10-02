<template>
  <div class="home">
    
    <NavBar/>
    <section>
        <CrearProducto/>
    </section>

  </div>
  
  
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CrearProducto from "@/components/CrearProducto.vue";


export default {
    name:"CreacionProducto",
    components:{
        NavBar,
        CrearProducto,
    },
}
</script>

<style scoped>

</style>