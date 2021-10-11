<template>
  <div class="home">
    
    <NavBar/>

    <b-alert 
    :show="dismissCountDown" 
    dismissible 
    :variant="mensaje.color" 
    @dismissed="dismissCountDown=0" 
    @dismiss-count-down="countDownChanged" > 
    {{mensaje.texto}} 
    </b-alert>

    <main>
    <div class="container-fluid bg-trasparent my-4 p-3" style="position: relative;">
        <div class="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
            <div class="col" v-for="(item, index) in notas" :key="index">
                <div class="card h-100 shadow-sm"> <img v-bind:src="item.imagen" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">{{item.nombre}}</h3>
                        <p class="card-text">{{item.descripcion}}</p>
                        <div class="clearfix mb-3"> <span class="float-start badge rounded-pill bg-success">${{item.precio}}</span> 
                        <span class="float-end"><a class="text-muted small" href="#">Disponible: {{item.cantidad}}</a></span> </div>                        
                        <div class="text-center my-4"> <a href="#" class="btn btn-warning">Adquirir Producto</a> </div>
                    </div>
                </div>
            </div>

         
      </div>
    </div>
    </main>
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
  data() {
        return {

            notas: [],
            mensaje: {color: 'success', texto: ''}, 
            dismissSecs: 2, 
            dismissCountDown: 0,

            nota:{codigo:"", nombre:"", descripcion:"", cantidad:"", imagen:""}, //Este objeto es el que yo voy a enviar al servidor (mediante POST) cuando se crea una nota en el formualrio -> Aca deben ir los campos del producto 
            editar:false,
            notaEditar:{},
            myitem:"615fc678d4507f2c4e6c8b4e"

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
                this.nota.imagen="";
                this.mensaje.color="success";
                this.mensaje.texto="Nota Agregada";
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
                //this.notas[index].codigo=res.data.codigo;
                //this.notas[index].nombre=res.data.nombre;
                //this.notas[index].descripcion=res.data.descripcion;
                this.notas[index].cantidad=this.notas[index].cantidad-1;
                //this.notas[index].imagen=res.data.imagen;
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

    }
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

/** ESTILO DE COMPONENTE CARD */

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

:root {
    --font1: 'Heebo', sans-serif;
    --font2: 'Fira Sans Extra Condensed', sans-serif;
    --font3: 'Roboto', sans-serif
}

body {
    font-family: var(--font3);
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)
}

h2 {
    font-weight: 900
}

.container-fluid {
    max-width: 1200px
}

.card {
    background: #fff;
    box-shadow: 0 6px 10px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .05);
    transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
    border: 0;
    border-radius: 1rem
}

.card-img,
.card-img-top {
    border-top-left-radius: calc(1rem - 1px);
    border-top-right-radius: calc(1rem - 1px)
}

.card h5 {
    overflow: hidden;
    height: 56px;
    font-weight: 900;
    font-size: 1rem
}

.card-img-top {
    width: 100%;
    max-height: 180px;
    object-fit: contain;
    padding: 30px
}

.card h2 {
    font-size: 1rem
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06)
}

.label-top {
    position: absolute;
    background-color: #8bc34a;
    color: #fff;
    top: 8px;
    right: 8px;
    padding: 5px 10px 5px 10px;
    font-size: .7rem;
    font-weight: 600;
    border-radius: 3px;
    text-transform: uppercase
}

.top-right {
    position: absolute;
    top: 24px;
    left: 24px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    font-size: 1rem;
    font-weight: 900;
    background: #229cff;
    line-height: 90px;
    text-align: center;
    color: white
}

.top-right span {
    display: inline-block;
    vertical-align: middle
}

@media (max-width: 768px) {
    .card-img-top {
        max-height: 250px
    }
}

.over-bg {
    background: rgba(53, 53, 53, 0.85);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(0.0px);
    -webkit-backdrop-filter: blur(0.0px);
    border-radius: 10px
}

.btn {
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    padding: 5px 50px 5px 50px
}

.box .btn {
    font-size: 1.5rem
}

@media (max-width: 1025px) {
    .btn {
        padding: 5px 40px 5px 40px
    }
}

@media (max-width: 250px) {
    .btn {
        padding: 5px 30px 5px 30px
    }
}

.btn-warning {
    background: none rgb(112, 180, 158);
    color: #ffffff;
    fill: #ffffff;
    border: none;
    text-decoration: none;
    outline: 0;
    box-shadow: -1px 6px 19px rgba(247, 129, 10, 0.25);
    border-radius: 100px
}

.btn-warning:hover {
    background: none rgb(56, 148, 113);
    color: #ffffff;
    box-shadow: -1px 6px 13px rgba(255, 150, 43, 0.35)
}

.bg-success {
    font-size: 1rem;
    background-color: #3c7a2c !important
}

.bg-danger {
    font-size: 1rem
}

.price-hp {
    font-size: 1rem;
    font-weight: 600;
    color: darkgray
}

.amz-hp {
    font-size: .7rem;
    font-weight: 600;
    color: darkgray
}

.fa-question-circle:before {
    color: darkgray
}

.fa-plus:before {
    color: darkgray
}

.box {
    border-radius: 1rem;
    background: #fff;
    box-shadow: 0 6px 10px rgb(0 0 0 / 8%), 0 0 6px rgb(0 0 0 / 5%);
    transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12)
}

.box-img {
    max-width: 300px
}

.thumb-sec {
    max-width: 300px
}

@media (max-width: 576px) {
    .box-img {
        max-width: 200px
    }

    .thumb-sec {
        max-width: 200px
    }
}

.inner-gallery {
    width: 60px;
    height: 60px;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin: 1px;
    display: inline-block;
    overflow: hidden;
    -o-object-fit: cover;
    object-fit: cover
}

@media (max-width: 370px) {
    .box .btn {
        padding: 5px 40px 5px 40px;
        font-size: 1rem
    }
}

.disclaimer {
    font-size: .9rem;
    color: darkgray
}

.related h3 {
    font-weight: 900
}

footer {
    background: #212529;
    height: 80px;
    color: #fff
}

</style>