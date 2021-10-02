<template>
  <div class="product-item">
    <img v-bind:src="url" alt="Icon" />
    <h3>{{titulo}}</h3>
    <p>
      {{parrafo}}
    </p>
    <router-link v-bind:to="ruta"><button class="btn-product">Ver Producto</button></router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
      url:String, titulo:String, parrafo:String, ruta:String
  }
};
</script>

<style scoped>
.product-item {
    display: flex;
    flex-direction:column;
    padding: 20px;
    margin: 10px;
    background-color:rgb(174, 236, 238);
    max-width: 200px;
}

a{
    text-decoration: none;
    color: black;
}

.btn-product{
    background-color: rgb(112, 180, 158);
    border: none;
    color: white;
    padding: 13px;
}

</style>