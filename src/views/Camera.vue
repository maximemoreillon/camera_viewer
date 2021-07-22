<template>
  <div class="cameras">
    <h1>{{this.$route.params.name || 'Camera'}}</h1>

    <img :src="url">

  </div>
</template>

<script>


export default {
  name: 'Camera',
  computed : {
    url(){
      const camera_name = this.$route.params.name
      return `${process.env.VUE_APP_API_URL}/cameras/${camera_name}?jwt=${localStorage.jwt}`
    }
  },


}
</script>

<style scoped>
img {
  width: 100%;
  height: 60vh;
  object-fit: contain;
}

</style>
