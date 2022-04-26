

<template>
  <v-card
    max-width="20em"
    exact
    :to="{name: 'camera', params: {camera_id: camera._id}}">
    <v-img
      width="100%"
      height="15em"
      cover
      :src="src" />
    <v-card-title>
      {{camera.name}}
    </v-card-title>
  </v-card>
</template>

<script>


export default {
  name: 'CameraPreview',
  props: {
    camera: Object,
  },
  data(){
    return {
    }
  },
  computed : {
    src(){
      const jwt = this.$cookie.get('jwt')
      return `${process.env.VUE_APP_API_URL}/cameras/${this.camera._id}/stream?jwt=${jwt}`
    }
  },


}
</script>

<style scoped>


</style>
