<template>
  <div class="home">
    
    <NavBar/>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
//import Card from "@/components/Card.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Principal",
  components: {
    //Card,
    NavBar
  },
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


</style>