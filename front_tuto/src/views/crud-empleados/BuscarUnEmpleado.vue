<template>
  <div class="home">
    
    <NavBar/>
    <section>
        <BuscarEmpleado/>
    </section>

  </div>
  
  
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import BuscarEmpleado from "@/components/BuscarEmpleado.vue";

export default {
    name:"BuscarUnEmpleado",
    components:{
        NavBar,
        BuscarEmpleado
    },
}
</script>

<style scoped>
.crear-section{
    background-color: rgb(233, 248, 248);
}

</style>