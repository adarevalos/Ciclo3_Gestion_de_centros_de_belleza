<template>
  <div class="home">
    
    <NavBar/>
    <section>
        <EliminarEmpleado/>
    </section>

  </div>
  
  
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import EliminarEmpleado from "@/components/EliminarEmpleado.vue";

export default {
    name:"EliminacionEmpleado",
    components:{
        NavBar,
        EliminarEmpleado
    },
}
</script>

<style scoped>
.crear-section{
    background-color: rgb(233, 248, 248);
}

</style>