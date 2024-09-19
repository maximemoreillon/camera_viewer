<template>
  <v-card
    :loading="imageLoading"
    exact
    :to="{ name: 'camera', params: { camera_id: camera._id } }"
  >
    <v-img
      width="100%"
      aspect-ratio="1.4"
      :src="src"
      @error="handleImageError()"
      @loadstart="handleImageLoadStart()"
      @load="handleImageLoad()"
    />

    <v-card-title>
      {{ camera.name }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "CameraPreview",
  props: {
    camera: Object,
  },
  data() {
    return {
      imageLoading: false,
      imageLoaded: false,
      retry: 0,
    }
  },
  methods: {
    handleImageLoadStart() {
      this.imageLoaded = false
      this.imageLoading = true
      setTimeout(() => {
        if (!this.imageLoaded) this.retry++
      }, 5000)
    },
    handleImageLoad() {
      this.imageLoaded = true
      this.imageLoading = false
    },
    handleImageError() {
      // this.retry++
    },
  },
  computed: {
    src() {
      const jwt =
        this.axios.defaults.headers.common["Authorization"]?.split(" ")[1]

      return `${process.env.VUE_APP_API_URL}/cameras/${this.camera._id}/stream?jwt=${jwt}&retry=${this.retry}`
    },
  },
}
</script>
