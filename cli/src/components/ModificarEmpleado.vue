<template>
 <!--
  <div class="container">
    <h2>Modificar Empleado</h2>
    <p>Por favor digite la identificación del empleado que desea modificar:</p>
    <form class="form-productos">
      <div class="input-item">
        <label class="etiquetas" for="codigo">Identificacion del Empleado a Modificar:</label>
        <input class="etiquetas entradas" type="text" name="codigo" />
      </div>
      <div class="botones-container">
        <input class="boton" type="button" value="Buscar" />
        <b-button class="btn mx-5 my-3" @click="activarEdicion(item._id)">Editar</b-button>
        <p>Espacio para info dependiendo si se encuentra la busqueda</p>
      </div>
    </form>

    <form class="form-productos">
      <h3>INFORMACIÓN DEL EMPLEADO A MODIFICAR</h3>
      <div class="input-item">
        <label class="etiquetas" for="nombre">Nombre:</label>
        <input class="etiquetas entradas" type="text" name="nombre" v-model="notaEditar.nombre" />
      </div>
      <div class="input-item">
        <label class="etiquetas" for="descripcion">Apellidos:</label>
        <input class="etiquetas entradas" type="text" name="descripcion" v-model="notaEditar.descripcion" />
      </div>
      <div class="input-item">
        <label class="etiquetas" for="direccion">Dirección:</label>
        <input class="etiquetas entradas" type="text" name="direccion" v-model="notaEditar.direccion"/>
      </div>
      <div class="input-item">
        <label class="etiquetas" for="cargo">Cargo</label>
        <input class="etiquetas entradas" type="text" name="cargo" v-model="notaEditar.cargo" />
      </div>
      <div class="botones-container">
        <input class="boton" type="button" value="Modificar" />
        <input class="boton" type="button" value="Limpiar" />
        <input class="boton" type="button" value="Cancelar" />
      </div>
    </form>
  </div> -->
    <div class="container">
        
        <h1>Eliminación de Empleados</h1>
        <p>Ingrese el id del empleado que desea eliminar:</p>

        <b-alert 
        :show="dismissCountDown" 
        dismissible 
        :variant="mensaje.color" 
        @dismissed="dismissCountDown=0" 
        @dismiss-count-down="countDownChanged" > 
        {{mensaje.texto}} 
        </b-alert>
        
        <form @submit.prevent="agregarNota()" v-if="!editar" >   
            <input type="text" class="form-control my-2" placeholder="Codigo" v-model="nota.codigo">
            <b-button class="btn-warning mx-2" @click="activarEdicion(nota.codigo)">Editar</b-button>
        </form>

        <form @submit.prevent="editarNota(notaEditar)" v-if="editar">
            <h3>Editar Producto</h3>
            <input type="text" class="form-control my-2" placeholder="Codigo" v-model="notaEditar.codigo">
            <input type="text" class="form-control my-2" placeholder="Nombres" v-model="notaEditar.nombre">
            <input type="text" class="form-control my-2" placeholder="Apellidos" v-model="notaEditar.apellido">
            <input type="text" class="form-control my-2" placeholder="Dirección" v-model="notaEditar.direccion">
            <input type="text" class="form-control my-2" placeholder="Cargo" v-model="notaEditar.cargo">
        <b-button class="btn-success my-2 mx-2" type="submit">Editar</b-button>
        <b-button class="my-2" type="button" @click="editar=false">Cancelar</b-button>

        </form>
<!--
        <form @submit.prevent="agregarNota()" v-if="!editar" >   
            <input type="text" class="form-control my-2" placeholder="Codigo" v-model="nota.codigo">
            <input type="text" class="form-control my-2" placeholder="Nombres" v-model="nota.nombre">
            <input type="text" class="form-control my-2" placeholder="Apellidos" v-model="nota.apellido">
            <input type="text" class="form-control my-2" placeholder="Dirección" v-model="nota.direccion">
            <input type="text" class="form-control my-2" placeholder="Cargo" v-model="nota.cargo">
            <b-button class="btn-success my-2" type="submit">Agregar</b-button>
        </form> -->

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Codigo</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in notas" :key="index">
                    <th scope="row">{{item._id}}</th>
                    <td>{{item.codigo}}</td>
                    <td>{{item.nombre}}</td>
                    <td>{{item.apellido}}</td>
                    <td>{{item.cargo}}</td>
                   <!-- <td>
                        <b-button class="btn-danger mx-2" @click="eliminarNota(item._id)">Eliminar</b-button>
                        <b-button class="btn-warning mx-2" @click="activarEdicion(item._id)">Editar</b-button>
                  
                    </td> -->
                </tr>

            </tbody>
        </table>
    </div>



</template>

<script>
export default {
  name: "ModificarEmpleado",
  data() {
    return {
      notas: [],
      mensaje: { color: "success", texto: "" },
      dismissSecs: 5,
      dismissCountDown: 0,

      nota: { codigo: "", nombre: "", apellido: "", direccion: "", cargo: "" }, //Este objeto es el que yo voy a enviar al servidor (mediante POST) cuando se crea una nota en el formualrio -> Aca deben ir los campos del producto
      editar: false,
      notaEditar: {},
    };
  },

  created() {
    //Que me liste las notas

    this.listarNotas();
  },

  methods: {
    //Funciones que yo voy a utilizar

    listarNotas() {
      this.axios
        .get("/employee") //Axios es un cliente HTTP que me permite generar peticiones (get,put,post,etc)
        .then((res) => {
          //Esto implementa una promesa. Voy a obtener una respuesta del servidor (res)
          console.log(res.data);
          this.notas = res.data; //Igualo notas[] (que está en data) a lo que me da el servidor
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    agregarNota() {
      this.axios
        .post("/newemployee", this.nota)
        .then((res) => {
          this.notas.push(res.data);
          this.nota.codigo = "";
          this.nota.nombre = "";
          this.nota.apellido = "";
          this.nota.direccion = "";
          this.nota.cargo = "";
          this.mensaje.color = "success";
          this.mensaje.texto = "Producto Agregado";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    eliminarNota(id) {
      this.axios
        .delete(`/employee/${id}`)
        .then((res) => {
          const index = this.notas.findIndex(
            (item) => item._id === res.data._id
          );
          this.notas.splice(index, 1);
          this.mensaje.color = "success";
          this.mensaje.texto = "Empleado Eliminado";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    activarEdicion(id) {
      this.editar = true;
      this.axios
        .get(`/employee/${id}`)
        .then((res) => {
          this.notaEditar = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    busqueda(id) {
      this.editar = true;
      this.axios
        .get(`/employee/${id}`)
        .then((res) => {
          this.notaEditar = res.data;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },

    editarNota(item) {
      this.axios
        .put(`/editemployee/${item._id}`, item)
        .then((res) => {
          const index = this.notas.findIndex((n) => n._id === res.data._id);
          this.notas[index].codigo = res.data.codigo;
          this.notas[index].nombre = res.data.nombre;
          this.notas[index].apellido = res.data.apellido;
          this.notas[index].direccion = res.data.direccion;
          this.notas[index].cargo = res.data.cargo;
          this.mensaje.color = "success";
          this.mensaje.texto = "Producto Editado";
          this.showAlert();
          this.editar = false;
        })
        .catch((e) => {
          console.log(e.response);
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  max-width: 100%;
  margin-top: 10px;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
}

.input-item {
  display: flex;
  width: 50%;
  justify-content: space-between;
  margin: 15px;
  padding: 10px;
  box-shadow: 0px 0px 15px rgb(143, 174, 236);
}

.etiquetas {
  margin: 5px;
  padding: 3px;
}
.entradas {
  display: flex;
  width: 70%;
  padding: 10px;
}

.form-productos {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
}

.botones-container {
  display: flex;
  width: 80%;
  align-items: flex-end;
  margin-left: 30px;
}

.boton {
  margin: 15px;
  margin-right: 60px;
  margin-left: 30px;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  background: none;
  box-shadow: 0px 0px 15px rgb(143, 174, 236);
  border-radius: 15%;
  display: flex;
  flex-direction: column;
}
</style>