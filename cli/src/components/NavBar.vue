<template>
  <div>
        
  
    <div class="navbar1">
      <router-link class="icono_navbar" to="/" style="margin-right:50%">
        <img src="../assets/logo3.png" width="35" height="35" class="d-inline-block align-top " alt=" " loading="lazy " style="margin-right:30"> 
        HAIRSTYLE ACCESS
      </router-link>
    
      <router-link to="/" >Inicio</router-link>
      <router-link to="/productos">Catálogo</router-link>
      <router-link to="/crearempleado">Empleados</router-link>  
      <router-link to="/crearproducto">Administrar Productos</router-link>  
      <router-link to="/" class="nav-link disabled "  tabindex="-1 " style="color:gray">Iniciar Sesión</router-link>  
      <!--<div class="dropdown">
        <button class="dropbtn">
          Prod Items
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <router-link to="/crearproducto">Crear Producto</router-link>
          <router-link to="/modificarproducto">Modificar Producto</router-link>
          <router-link to="/eliminarproducto">Eliminar Producto</router-link>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">
          Empl items
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <router-link to="/crearempleado">Crear Empleado</router-link>
          <router-link to="/buscarempleado">Buscar Empleado</router-link>
          <router-link to="/modificarempleado">Modificar Empleado</router-link>
          <router-link to="/eliminarempleado">Eliminar Empleado</router-link>
        </div>
      </div>-->
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
  name: "NavBar",
};
</script>

<style scoped>
.navbar1 {
  display: flex;
  
  background-color: rgb(19, 110, 122);
  border: 1px solid black;
  justify-content: flex-start;
}

.navbar-list {
  display: flex;
  list-style-type: none;
}

a {
  text-decoration: none;
  color: rgb(221, 209, 209);
}

.icono_navbar {
  display: flex;
  justify-content: flex-start;
  background-color: rgb(19, 110, 122);
  
  
}

.navbar-item {
  margin: 5px;
}

/* Navbar container */
.navbar1 {
  display: flex;
  
  background-color: rgb(19, 110, 122);
  border: 1px solid black;
}

/* Links inside the navbar */
.navbar1 a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/*Starts Dropdown config*/

.dropdown {
  position: left;
  display: inline-block;
}

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

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: rgb(72, 151, 161);
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: rgb(131, 178, 185);
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>