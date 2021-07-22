

<template>
  <router-link
    class="camera"
    :to="{ name: 'camera', params: {name: camera.name} }">
    <img :src="camera_url">
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
    camera_url(){
      return `${process.env.VUE_APP_API_URL}/cameras/${this.camera.name}?jwt=${localStorage.jwt}`
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
