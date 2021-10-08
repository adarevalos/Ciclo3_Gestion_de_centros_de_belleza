<template>
    <div class="container">
        <h2>Crear Empleado</h2>
        <form class="form-productos">
            <div class="input-item"> 
                <label class="etiquetas" for="codigo">Identificacion:</label>        
                <input class="etiquetas entradas" type="text" name="codigo">
            </div>
            <div class="input-item">
                <label class="etiquetas" for="nombre">Nombres:</label>
                <input  class="etiquetas entradas" type="text" name="nombre">
            </div>
            <div class="input-item">
                <label class="etiquetas" for="descripcion">Apellidos:</label>   
                <input class="etiquetas entradas" type="text" name="descripcion">
            </div>
            <div class="input-item">
                <label class="etiquetas" for="cantidad">Direccion:</label>      
                <input class="etiquetas entradas" type="text" name="cantidad">
            </div>
            <div class="input-item">
                <label class="etiquetas" for="imagen">Cargo</label>        
                <input class="etiquetas entradas" type="text" name="imagen">
            </div>
            <div class="botones-container">
                <input class="boton" type="button" value="Crear"> 
                <input class="boton" type="button" value="Limpiar"> 
                <input class="boton" type="button" value="Cancelar"> 
            </div>
           
             
                  
        </form>
    </div>
  </template>

<script>
export default {
    name:"CrearEmpleado",
}
</script>

<style scoped>

.container{
    display: flex;
    max-width: 100%;
    margin-top: 10px;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;

}


.input-item{
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: 15px;
    padding: 10px;
    box-shadow: 0px 0px 15px rgb(143, 174, 236);
}

.etiquetas{
    margin: 5px;
    padding: 3px;
}
.entradas{
    display: flex;
    width: 70%;
    padding: 10px;
    
    
}

.form-productos{
    display: flex;
    width: 100%;
    flex-direction: column;
}

.botones-container{
    display: flex;
    width: 50%;
    align-items:flex-end;
}

.boton{
    
    margin: 15px;
    margin-right: 60px;
    margin-left: 50px;
    padding: 12px 25px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    background: none;
    box-shadow: 0px 0px 15px rgb(143, 174, 236);
    display: block;
    border-radius: 15%;


}

</style>