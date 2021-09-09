

<template>
  <router-link
    class="camera"
    :to="{ name: 'camera', params: {camera_id: camera._id} }">
    <img :src="stream_url">
    <span class="name">
      {{camera.name}}
    </span>
  </router-link>
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
    stream_url(){
      const jwt = this.$cookie.get('jwt')
      return `${process.env.VUE_APP_API_URL}/cameras/${this.camera._id}/stream?jwt=${jwt}`
    }
  },


}
</script>

<style scoped>
.camera {
  text-decoration: none;
  color: currentcolor;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid #dddddd;
  border-radius: 0.5em;
  transition: 0.25s;
}

.camera:hover {
  border-color: #c00000;
  color: #c00000;
}

.camera img {
  width: 20em;
}

.camera .name {
  font-size: 200%;
  margin-top: 0.5em;
}

</style>
