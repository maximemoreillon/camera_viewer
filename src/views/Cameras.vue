<template>
  <v-card class="cameras">
    
    <v-toolbar flat>
      <v-row align="center">
          <v-col>
            <v-toolbar-title>
              Cameras
            </v-toolbar-title>
          </v-col>
          <v-spacer />
          <v-col cols="auto">
            <v-btn
              :to="{name: 'add_camera'}">
              Register
            </v-btn>
          </v-col>
          
        </v-row>
    </v-toolbar>
    <v-divider />

    <v-card-text>

      <v-row align="center">
          <v-col
            v-for="camera in cameras"
            :key="camera._id">
            <CameraPreview 
              :camera="camera" />
          </v-col>
          
        </v-row>

      
    </v-card-text>

  </v-card>
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




</style>
