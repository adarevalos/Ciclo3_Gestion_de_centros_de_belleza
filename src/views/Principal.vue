<template>
  <div class="home">
    <NavBar/>
    <Card/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Principal",
  components: {
    Card,
    NavBar
  },
};
</script>