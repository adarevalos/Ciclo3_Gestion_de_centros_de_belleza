<template>
<div>

<div v-bind:id="idCarousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="../assets/people.png" alt="banner image">
            <div class="carousel-caption d-none d-md-block">
                <h1 style="color:rgb(19, 110, 122)">HAIRSTYLE ACCESS</h1>
                <h2 style="color:rgb(19, 110, 122)">¡Encuentra tu propio estilo!</h2>
            </div>
        </div>
    </div>
</div>

</div>
</template>

<script>

export default {
  name: "TopBanner",
  components:{
      
  },
  props: ['idCarousel']
};
</script>

<style scoped>
</style>