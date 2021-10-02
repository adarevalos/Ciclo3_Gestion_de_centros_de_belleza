<template>
  <div class="home">
    <p>VISTA PRINCIPAL</p>
    <Card/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Principal",
  components: {
    Card
  },
};
</script>
