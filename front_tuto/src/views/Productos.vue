<template>
  <div class="home">
    
    <NavBar/>
    <div class="card-container">
        <Card titulo="Producto 1" 
        :url="require('../assets/cera.jpg')"
        parrafo="Esta es una descripción del producto 1"
        ruta="/mi_producto" />

        <Card titulo="Producto 2" 
        :url="require('../assets/cera.jpg')"
        parrafo="Esta es una descripción del producto 2"
        ruta="/mi_producto" />
        
        <Card titulo="Producto 2" 
        :url="require('../assets/cera.jpg')"
        parrafo="Esta es una descripción del producto 2"
        ruta="/mi_producto" />
        
        <Card titulo="Producto 2" 
        :url="require('../assets/cera.jpg')"
        parrafo="Esta es una descripción del producto 2"
        ruta="/mi_producto" />
        
        <Card titulo="Producto 2" 
        :url="require('../assets/cera.jpg')"
        parrafo="Esta es una descripción del producto 2"
        ruta="/mi_producto" />
        
        <Card titulo="Producto 2" 
        :url="require('../assets/cera.jpg')"
        parrafo="Esta es una descripción del producto 2"
        ruta="/mi_producto" />
        
        <Card titulo="Producto 2" 
        :url="require('../assets/cera.jpg')"
        parrafo="Esta es una descripción del producto 2"
        ruta="/mi_producto" />
        
        <Card titulo="Producto 2" 
        :url="require('../assets/cera.jpg')"
        parrafo="Esta es una descripción del producto 2"
        ruta="/mi_producto" />

        <Card titulo="Producto 2" 
        :url="require('../assets/cera.jpg')"
        parrafo="Esta es una descripción del producto 2"
        ruta="/mi_producto" />
        
        <Card titulo="Producto 2" 
        :url="require('../assets/cera.jpg')"
        parrafo="Esta es una descripción del producto 2"
        ruta="/mi_producto" />
                

    </div>



  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Productos",
  components: {
    Card,
    NavBar
  },
};
</script>

<style scoped>

.home{
    display: flex;
    flex-direction: column;
}
.card-container{
    display: flex;
    flex-wrap: wrap;
    
}


</style>