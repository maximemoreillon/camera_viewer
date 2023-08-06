<template>
  <v-card :loading="cameraInfoLoading">
    <v-toolbar flat>
      <v-btn exact icon :to="{ name: 'cameras' }">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <v-toolbar-title>
        {{ camera?.name || "Camera" }}
      </v-toolbar-title>
      <v-spacer />
      <template v-if="camera">
        <v-btn icon @click="update_camera()">
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
        <v-btn icon color="#c00000" @click="delete_camera()">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-toolbar>

    <template v-if="camera">
      <v-img
        max-height="50vh"
        contain
        :src="src"
        @error="handleImageError()"
        @loadstart="handleImageLoadStart()"
        @load="handleImageLoad()"
      />

      <v-row justify="center" v-if="imageLoading" class="my-6">
        <v-col cols="auto">
          <v-progress-circular indeterminate size="50" />
        </v-col>
      </v-row>

      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field label="Camera name" v-model="camera.name" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field label="Stream URL" v-model="camera.stream_url" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field label="Frame URL" v-model="camera.frame_url" />
          </v-col>
        </v-row>
      </v-card-text>
    </template>
  </v-card>
</template>

<script>
export default {
  name: "Camera",
  data: () => ({
    camera: null,
    cameraInfoLoading: false,
    imageLoading: false,
    imageLoaded: false,
    retry: 0,
  }),
  mounted() {
    this.get_camera()
  },
  methods: {
    get_camera() {
      this.cameraInfoLoading = true
      const url = `/cameras/${this.camera_id}`
      this.axios
        .get(url)
        .then(({ data }) => {
          this.camera = data
        })
        .catch((error) => {
          alert(error)
          console.error(error)
        })
        .finally(() => {
          this.cameraInfoLoading = false
        })
    },
    update_camera() {
      const url = `/cameras/${this.camera_id}`
      this.axios
        .patch(url, this.camera)
        .then(() => {
          alert("Camera updated")
        })
        .catch((error) => {
          alert(error)
          console.error(error)
        })
    },
    delete_camera() {
      if (!confirm(`Delete camera ${this.camera.name}?`)) return
      const url = `/cameras/${this.camera_id}`
      this.axios
        .delete(url)
        .then(() => {
          this.$router.push({ name: "cameras" })
        })
        .catch((error) => {
          alert(error)
          console.error(error)
        })
    },

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
      this.retry++
    },
  },
  computed: {
    camera_id() {
      return this.$route.params.camera_id
    },
    src() {
      const jwt = this.$cookie.get("jwt")
      return `${process.env.VUE_APP_API_URL}/cameras/${this.camera_id}/stream?jwt=${jwt}&retry=${this.retry}`
    },
  },
}
</script>

<style scoped></style>
