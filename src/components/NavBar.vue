<template>
  <div>
    <div class="navbar">
      <router-link to="/">Inicio</router-link>
      <router-link to="/productos">Productos</router-link>
      <div class="dropdown">
        <button class="dropbtn">Administrar Productos
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <router-link to="/crearproducto">Crear Producto</router-link>
          <router-link to="/modificarproducto">Modificar Producto</router-link>
          <router-link to="/eliminarproducto">Eliminar Producto</router-link>
        </div>
      </div>
    </div>
    <!-- NAVBAR ANTIGUO CON LISTAS
    <nav id="navbar" class="navbar">
        <ul class="navbar-list">
          <li class="navbar-item"><router-link class="nav-link scrollto active" to="/">Inicio</router-link></li>
          <li class="navbar-item"><router-link class="nav-link scrollto" to="/productos">Productos</router-link></li>
          <li class="navbar-item"><router-link class="nav-link scrollto" to="/administracion">Administrar</router-link></li>
        </ul>
      </nav>   -->

  </div>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>

.navbar{
    display: flex;
    width: 98vw; 
    background-color:rgb(19, 110, 122);
    border: 1px solid black;
    /*justify-content: flex-end;*/

}

.navbar-list{
    display: flex;
    list-style-type: none;
}

a{
    text-decoration: none;
    color: rgb(221, 209, 209);
}

.navbar-item{
    margin:5px;
    
}

/* Navbar container */
.navbar {
    display: flex;
    width: 98vw; 
    background-color:rgb(19, 110, 122);
    border: 1px solid black;
}

/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: rgb(72, 151, 161);
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: rgb(131, 178, 185);
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

</style>