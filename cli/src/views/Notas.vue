<template>
<div class="home">
    <NavBar/>

    <h1>Notas</h1>

    <b-alert 
    :show="dismissCountDown" 
    dismissible 
    :variant="mensaje.color" 
    @dismissed="dismissCountDown=0" 
    @dismiss-count-down="countDownChanged" > 
    {{mensaje.texto}} 
    </b-alert>


    <form @submit.prevent="editarNota(notaEditar)" v-if="editar">
        <h3>Editar nota</h3>

        <input type="text" class="form-control my-2" placeholder="Nombre" v-model="notaEditar.nombre">
        <input type="text" class="form-control my-2" placeholder="Descripcion" v-model="notaEditar.descripcion">
        <b-button class="btn-success my-2 mx-2" type="submit">Editar</b-button>
        <b-button class=" my-2" type="submit" @click="editar=false">Cancelar</b-button>

    </form>
    <form @submit.prevent="agregarNota()" v-if="!editar">
        <h3>Agregar una nueva nota</h3>

        <input type="text" class="form-control my-2" placeholder="Nombre" v-model="nota.nombre">
        <input type="text" class="form-control my-2" placeholder="Descripcion" v-model="nota.descripcion">
        <b-button class="btn-success my-2" type="submit">Agregar</b-button>

    </form>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nota</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in notas" :key="index">
                <th scope="row">{{item._id}}</th>
                <td>{{item.nombre}}</td>
                <td>{{item.descripcion}}</td>
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

    data() {
        return {

            notas: [],
            mensaje: {color: 'success', texto: ''}, 
            dismissSecs: 5, 
            dismissCountDown: 0,

            nota:{nombre:"",descripcion:""}, //Este objeto es el que yo voy a enviar al servidor (mediante POST) cuando se crea una nota en el formualrio -> Aca deben ir los campos del producto 
            editar:false,
            notaEditar:{}

        }

    },

    created() {   //Que me liste las notas

        this.listarNotas();

    },

    methods: { //Funciones que yo voy a utilizar 

        listarNotas() {

            this.axios.get('/nota')   //Axios es un cliente HTTP que me permite generar peticiones (get,put,post,etc)
                .then(res => {     //Esto implementa una promesa. Voy a obtener una respuesta del servidor (res)
                    console.log(res.data);   
                    this.notas = res.data;    //Igualo notas[] (que está en data) a lo que me da el servidor

                })
                .catch(e => {

                    console.log(e.response);

                })

        },

        agregarNota(){


            this.axios.post('/nueva-nota',this.nota)
            .then(res=>{

                this.notas.push(res.data)
                this.nota.nombre="";
                this.nota.descripcion="";
                this.mensaje.color="success";
                this.mensaje.texto="Nota Agregada";
                this.showAlert();


            })
            .catch(e=>{

                console.log(e.response);

            })


        },

        eliminarNota(id){

            this.axios.delete(`/nota/${id}`)
            .then(res=>{

                const index = this.notas.findIndex(item=> item._id===res.data._id);
                this.notas.splice(index, 1);
                this.mensaje.color="success";
                this.mensaje.texto="Nota Eliminada";
                this.showAlert();


            })
            .catch(e=>{

                  console.log(e.response);

            })
        },

        activarEdicion(id){

            this.editar=true;
            this.axios.get(`/nota/${id}`)
            .then(res=>{

                this.notaEditar=res.data;

            })
            .catch(e=>{

                 console.log(e.response);


            })


        },

        editarNota(item){
            
            this.axios.put(`/nota/${item._id}`, item)
            .then(res=>{
                const index= this.notas.findIndex(n=> n._id===res.data._id);
                this.notas[index].nombre=res.data.nombre;
                this.notas[index].descripcion=res.data.descripcion;
                this.mensaje.color="success";
                this.mensaje.texto="Nota Editada";
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
