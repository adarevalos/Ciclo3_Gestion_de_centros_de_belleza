<template>
  <div class="home">
    
    <NavBar/>
    <section>
        <EliminarProducto/>
    </section>

  </div>
  
  
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import EliminarProducto from "@/components/EliminarProducto.vue";

export default {
    name:"EliminacionProducto",
    components:{
        NavBar,
        EliminarProducto
    },
}
</script>

<style scoped>
.crear-section{
    background-color: rgb(233, 248, 248);
}

</style>