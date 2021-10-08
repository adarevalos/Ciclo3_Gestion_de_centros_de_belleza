<template>
  <div class="home">
    
    <NavBar/>

    <section>
        <ModificarEmpleado/>
    </section>

  </div>
  
  
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ModificarEmpleado from "@/components/ModificarEmpleado.vue";

export default {
    name:"ModificacionEmpleado",
    components:{
        NavBar,
        ModificarEmpleado
    },
}
</script>

<style scoped>
.crear-section{
    background-color: rgb(233, 248, 248);
}

</style>