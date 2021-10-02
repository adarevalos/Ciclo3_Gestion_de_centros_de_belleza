<template>
  <div class="home">
    
    <NavBar/>

    <section>
        <ModificarProducto/>
    </section>

  </div>
  
  
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ModificarProducto from "@/components/ModificarProducto.vue";

export default {
    name:"ModificacionProducto",
    components:{
        NavBar,
        ModificarProducto
    },
}
</script>

<style scoped>
.crear-section{
    background-color: rgb(233, 248, 248);
}

</style>