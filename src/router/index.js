import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import Principal from "../views/Principal.vue"; //cuando pongo /.../.../Principal -> Renderice PRINCIPAL (En azul)
import Productos from "../views/Productos.vue";
import Administracion from "../views/crud-productos/Administracion.vue";
import CreacionProducto from "../views/crud-productos/CreacionProducto.vue";
import ModificacionProducto from "../views/crud-productos/ModificacionProducto.vue";
import EliminacionProducto from "../views/crud-productos/EliminacionProducto.vue";

Vue.use(VueRouter);

const routes = [
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
