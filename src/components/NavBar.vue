<template>
  <div>
    <nav id="navbar" class="navbar">
        <ul>
          <li><router-link class="nav-link scrollto active" to="/principal">Inicio</router-link></li>
          <li><router-link class="nav-link scrollto" to="/productos">Productos</router-link></li>
          <li><router-link class="nav-link scrollto" to="/administracion">Administrar</router-link></li>
        </ul>
      </nav><!-- .navbar -->
  </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>

</style>