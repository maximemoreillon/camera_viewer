<template>
  <v-card :loading="loading" max-width="60rem" class="mx-auto">
    <template v-if="camera">
      <v-toolbar flat>
        <v-btn exact icon :to="{ name: 'cameras' }">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>

        <v-toolbar-title>
          {{ camera.name }}
        </v-toolbar-title>
        <v-spacer />
        <v-btn icon color="#c00000" @click="delete_camera()">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-btn icon @click="update_camera()">
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
      </v-toolbar>

      <v-img max-height="50vh" contain :src="src" @error="handleImageError()" />

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
    loading: false,
  }),
  mounted() {
    this.get_camera()
  },
  methods: {
    get_camera() {
      this.loading = true
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
          this.loading = false
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
    refresh() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    handleImageError() {
      console.error("Image error")
    },
  },
  computed: {
    camera_id() {
      return this.$route.params.camera_id
    },
    src() {
      const jwt = this.$cookie.get("jwt")
      return `${process.env.VUE_APP_API_URL}/cameras/${this.camera_id}/stream?jwt=${jwt}`
    },
  },
}
</script>

<style scoped></style>
