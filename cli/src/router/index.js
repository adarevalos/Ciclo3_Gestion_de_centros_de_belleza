import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Principal from "../views/Principal.vue"; //cuando pongo /.../.../Principal -> Renderice PRINCIPAL (En azul)
import Productos from "../views/Productos.vue";
import Administracion from "../views/crud-productos/Administracion.vue";
import CreacionProducto from "../views/crud-productos/CreacionProducto.vue";
import ModificacionProducto from "../views/crud-productos/ModificacionProducto.vue";
import EliminacionProducto from "../views/crud-productos/EliminacionProducto.vue";
import CreacionEmpleado from "../views/crud-empleados/CreacionEmpleado.vue";
import BuscarUnEmpleado from "../views/crud-empleados/BuscarUnEmpleado.vue";
import ModificacionEmpleado from "../views/crud-empleados/ModificacionEmpleado.vue";
import EliminacionEmpleado from "../views/crud-empleados/EliminacionEmpleado.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
  {
    path: '/notas',
    name: 'Notas',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/Notas.vue')
  },
  {
    path: "/",
    name: "Principal",
    component: Principal,  //ESto sería una vista manejada por el router
  },
  {
    path: "/productos",
    name: "Productos",
    component: Productos, 
  },
  {
    path: "/administracion",
    name: "Administracion",
    component: Administracion, 
  },
  {
    path: "/crearproducto",
    name: "CreacionProducto",
    component: CreacionProducto, 
  },
  {
    path: "/modificarproducto",
    name: "ModificacionProducto",
    component: ModificacionProducto, 
  },
  {
    path: "/eliminarproducto",
    name: "EliminacionProducto",
    component: EliminacionProducto, 
  },
  {
    path: "/crearempleado",
    name: "CreacionEmpleado",
    component: CreacionEmpleado, 
  },
  {
    path: "/buscarempleado",
    name: "BuscarUnEmpleado",
    component: BuscarUnEmpleado, 
  },
  {
    path: "/modificarempleado",
    name: "ModificacionEmpleado",
    component: ModificacionEmpleado, 
  },
  {
    path: "/eliminarempleado",
    name: "EliminacionEmpleado",
    component: EliminacionEmpleado, 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
