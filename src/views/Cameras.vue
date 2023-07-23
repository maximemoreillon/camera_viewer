<template>
  <div>
    <v-btn
      class="fab"
      fixed
      bottom
      right
      fab
      color="primary"
      :to="{ name: 'add_camera' }"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-row
      class="ma-5"
      align="center"
      justify="center"
      v-if="loading"
      max-width="50rem"
    >
      <v-col cols="auto">
        <v-progress-circular indeterminate size="72"></v-progress-circular>
      </v-col>
    </v-row>
    <v-row v-else-if="cameras.length">
      <v-col cols="12" md="4" v-for="camera in cameras" :key="camera._id">
        <CameraPreview :camera="camera" />
      </v-col>
    </v-row>
    <v-card v-else class="mx-auto" max-width="50rem">
      <v-card-text> No camera yet. Click the + button to add one </v-card-text>
    </v-card>
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
      this.axios
        .get(`/cameras`)
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
