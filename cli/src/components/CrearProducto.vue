<template>
<div class="container">
    <h3></h3>
    <h1>SISTEMA DE GESTIÓN DE PRODUCTOS</h1>

    <b-alert 
    :show="dismissCountDown" 
    dismissible 
    :variant="mensaje.color" 
    @dismissed="dismissCountDown=0" 
    @dismiss-count-down="countDownChanged" > 
    {{mensaje.texto}} 
    </b-alert>


    <form @submit.prevent="editarNota(notaEditar)" v-if="editar">
        <h3>Editar Producto</h3>

        <input type="text" class="form-control my-2" placeholder="Codigo" v-model="notaEditar.codigo">
        <input type="text" class="form-control my-2" placeholder="Nombre" v-model="notaEditar.nombre">
        <input type="text" class="form-control my-2" placeholder="Descripcion" v-model="notaEditar.descripcion">
        <input type="number" class="form-control my-2" placeholder="Cantidad" v-model="notaEditar.cantidad">
        <input type="number" class="form-control my-2" placeholder="Precio Unitario [COP]" v-model="notaEditar.precio">
        <input type="text" class="form-control my-2" placeholder="Inserte URL de la imagen" v-model="notaEditar.imagen">
        <b-button class="btn-success my-2 mx-2" type="submit">Editar</b-button>
        <b-button class=" my-2" type="submit" @click="editar=false">Cancelar</b-button>

    </form>
    <form @submit.prevent="agregarNota()" v-if="!editar">
        <h3>Agregar Nuevo Producto</h3>

        <input type="text" class="form-control my-2" placeholder="Codigo" v-model="nota.codigo">
        <input type="text" class="form-control my-2" placeholder="Nombre" v-model="nota.nombre">
        <input type="text" class="form-control my-2" placeholder="Descripcion" v-model="nota.descripcion"> 
        <input type="number" class="form-control my-2" placeholder="Cantidad" v-model="nota.cantidad">
        <input type="number" class="form-control my-2" placeholder="Precio Unitario [COP]" v-model="nota.precio">
        <input type="text" class="form-control my-2" placeholder="Inserte URL de la imagen" v-model="nota.imagen">
        <b-button class="btn-success my-2" type="submit">Agregar</b-button>

    </form>
    <div style="margin-top:50px"><h1>LISTA DE PRODUCTOS EN STOCK</h1></div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Codigo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">URL Imagen</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in notas" :key="index">
                <th scope="row">{{item._id}}</th>
                <td>{{item.codigo}}</td>
                <td>{{item.nombre}}</td>
                <td>{{item.descripcion}}</td>
                <td>{{item.cantidad}}</td>
                <td>{{item.precio}}</td>
                <td>{{item.imagen}}</td>
                <td>
                    <b-button class="btn-danger mx-2" @click="eliminarNota(item._id)">Eliminar</b-button>
                    <b-button class="btn-warning mx-2" @click="activarEdicion(item._id)">Editar</b-button>
                </td>
            </tr>

        </tbody>
    </table>

</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {

    name: "EliminarProducto",
    data() {
        return {

            notas: [],
            mensaje: {color: 'success', texto: ''}, 
            dismissSecs: 2, 
            dismissCountDown: 0,

            nota:{codigo:"", nombre:"", descripcion:"", cantidad:"",precio:"", imagen:""}, //Este objeto es el que yo voy a enviar al servidor (mediante POST) cuando se crea una nota en el formualrio -> Aca deben ir los campos del producto 
            editar:false,
            notaEditar:{}

        }

    },

    created() {   //Que me liste las notas

        this.listarNotas();

    },

    methods: { //Funciones que yo voy a utilizar 

        listarNotas() {

            this.axios.get('/product')   //Axios es un cliente HTTP que me permite generar peticiones (get,put,post,etc)
                .then(res => {     //Esto implementa una promesa. Voy a obtener una respuesta del servidor (res)
                    console.log(res.data);   
                    this.notas = res.data;    //Igualo notas[] (que está en data) a lo que me da el servidor

                })
                .catch(e => {

                    console.log(e.response);

                })

        },

        agregarNota(){


            this.axios.post('/newproduct',this.nota)
            .then(res=>{

                this.notas.push(res.data)
                this.nota.codigo="";
                this.nota.nombre="";
                this.nota.descripcion="";
                this.nota.cantidad="";
                this.nota.precio="";
                this.nota.imagen="";
                this.mensaje.color="success";
                this.mensaje.texto="Producto Agregado";
                this.showAlert();


            })
            .catch(e=>{

                console.log(e.response);

            })


        },

        eliminarNota(id){

            this.axios.delete(`/product/${id}`)
            .then(res=>{

                const index = this.notas.findIndex(item=> item._id===res.data._id);
                this.notas.splice(index, 1);
                this.mensaje.color="success";
                this.mensaje.texto="Producto Eliminado";
                this.showAlert();


            })
            .catch(e=>{

                  console.log(e.response);

            })
        },

        activarEdicion(id){

            this.editar=true;
            this.axios.get(`/product/${id}`)
            .then(res=>{

                this.notaEditar=res.data;

            })
            .catch(e=>{

                 console.log(e.response);


            })


        },

        editarNota(item){
            
            this.axios.put(`/product/${item._id}`, item)
            .then(res=>{
                const index= this.notas.findIndex(n=> n._id===res.data._id);
                this.notas[index].codigo=res.data.codigo;
                this.notas[index].nombre=res.data.nombre;
                this.notas[index].descripcion=res.data.descripcion;
                this.notas[index].cantidad=res.data.cantidad;
                this.notas[index].precio=res.data.precio;
                this.notas[index].imagen=res.data.imagen;
                this.mensaje.color="success";
                this.mensaje.texto="Información Actualizada!";
                this.showAlert();
                this.editar=false;


            })
            .catch(e=>{

                console.log(e.response);

            })



        },
        countDownChanged(dismissCountDown) { 
            this.dismissCountDown = dismissCountDown 
        }, 
        showAlert() { 
            this.dismissCountDown = this.dismissSecs 
        }

    },
    components: {
    //Card,
    NavBar
  }

}
</script>


