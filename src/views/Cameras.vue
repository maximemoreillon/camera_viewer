<template>
  <div class="cameras">
    <h1>Cameras</h1>
    <p>
      <router-link :to="{ name: 'add_camera' }">Add camera</router-link>
    </p>



    <div class="cameras_wrapper">
      <template v-if="loading">
        <div class="">
          Loading camera...
        </div>
      </template>
      <template v-else-if="cameras.length">
        <CameraPreview
          v-for="(camera, index) in cameras"
          v-bind:key="`camera_${index}`"
          :camera="camera" />
      </template>
      <template v-else>
        No camera available
      </template>







    </div>

  </div>
</template>

<script>
import CameraPreview from '@/components/CameraPreview.vue'

export default {
  name: 'Cameras',
  components: {
    CameraPreview
  },
  data(){
    return {
      cameras: [],
      loading: false,
    }
  },
  mounted(){
    this.get_cameras()
  },
  methods: {
    get_cameras(){
      this.loading = true
      const url = `${process.env.VUE_APP_API_URL}/cameras`
      this.axios.get(url)
      .then(response => { this.cameras = response.data })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {this.loading = false})

    },
    camera_url(camera){
      return `${process.env.VUE_APP_API_URL}/cameras/${camera.name}`
    }
  }

}
</script>

<style scoped>
.cameras_wrapper {
  display: flex;
  flex-wrap: wrap;

}




</style>
