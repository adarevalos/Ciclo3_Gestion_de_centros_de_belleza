<template>
  <div class="home">
    
    <NavBar/>
    <section class="crear-section">
        <CrearProducto/>
    </section>
    <section>
        <ModificarProducto/>
    </section>
    <section class="crear-section">
        <EliminarProducto/>
    </section>

  </div>
  
  
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import CrearProducto from "@/components/CrearProducto.vue";
import ModificarProducto from "@/components/ModificarProducto.vue";
import EliminarProducto from "@/components/EliminarProducto.vue";

export default {
    name:"Administracion",
    components:{
        NavBar,
        CrearProducto,
        ModificarProducto,
        EliminarProducto
    },
}
</script>

<style scoped>
.crear-section{
    background-color: rgb(233, 248, 248);
}

</style>