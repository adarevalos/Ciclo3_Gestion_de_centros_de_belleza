<template>
  <div class="container">
    <h2>Buscar Empleado</h2>
    <p>Por favor digite la identificación del empleado que desea modificar:</p>
    <form class="form-productos">
      <div class="input-item">
        <label class="etiquetas" for="codigo"
          >Identificacion del Empleado a Modificar:</label
        >
        <input class="etiquetas entradas" type="text" name="codigo" />
      </div>
      <div class="botones-container">
        <input class="boton" type="button" value="Buscar" />
        <p>Espacio para info dependiendo si se encuentra la busqueda</p>
      </div>
    </form>

    <form class="form-productos">
      <h3>INFORMACIÓN DEL EMPLEADO BUSCADO</h3>
      <div class="input-item">
        <label class="etiquetas" for="nombre">Nombre:</label>
        <input class="etiquetas entradas" type="text" name="nombre" />
      </div>
      <div class="input-item">
        <label class="etiquetas" for="descripcion">Apellidos:</label>
        <input class="etiquetas entradas" type="text" name="descripcion" />
      </div>
      <div class="input-item">
        <label class="etiquetas" for="cantidad">Dirección:</label>
        <input class="etiquetas entradas" type="text" name="cantidad" />
      </div>
      <div class="input-item">
        <label class="etiquetas" for="imagen">Cargo</label>
        <input class="etiquetas entradas" type="text" name="imagen" />
      </div>
      <div class="botones-container">
        <input class="boton" type="button" value="Limpiar" />
        <input class="boton" type="button" value="Cancelar" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "BuscarEmpleado",
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