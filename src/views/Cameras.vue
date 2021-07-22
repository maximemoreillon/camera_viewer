<template>
  <div class="cameras">
    <h1>Cameras</h1>



    <div class="cameras_wrapper">

      <CameraPreview
        v-for="(camera, index) in cameras"
        v-bind:key="`camera_${index}`"
        :camera="camera" />





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
      cameras: []
    }
  },
  mounted(){
    this.get_cameras()
  },
  methods: {
    get_cameras(){
      const url = `${process.env.VUE_APP_API_URL}/cameras`
      this.axios.get(url)
      .then(response => {
        response.data.forEach( (camera) => {
          this.cameras.push(camera)
        })
        this.cameras = response.data
      })
      .catch(error => {
        console.error(error)
      })
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
