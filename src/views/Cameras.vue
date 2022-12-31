<template>
  <div>
    <v-btn
      class="fab"
      absolute
      bottom
      right
      fab
      color="primary"
      :to="{ name: 'add_camera' }"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-row v-if="!loading && cameras.length">
      <v-col cols="auto" v-for="camera in cameras" :key="camera._id">
        <CameraPreview :camera="camera" />
      </v-col>
    </v-row>
    <v-row justify="center" v-if="!loading && !cameras.length">
      <v-col> No camera registered yet </v-col>
    </v-row>
  </div>
</template>

<script>
import CameraPreview from "@/components/CameraPreview.vue"

export default {
  name: "Cameras",
  components: {
    CameraPreview,
  },
  data() {
    return {
      cameras: [],
      loading: false,
    }
  },
  mounted() {
    this.get_cameras()
  },
  methods: {
    get_cameras() {
      this.loading = true
      const url = `${process.env.VUE_APP_API_URL}/cameras`
      this.axios
        .get(url)
        .then((response) => {
          this.cameras = response.data
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => {
          this.loading = false
        })
    },
    camera_url(camera) {
      return `${process.env.VUE_APP_API_URL}/cameras/${camera.name}`
    },
  },
}
</script>
