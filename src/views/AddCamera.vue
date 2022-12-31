<template>
  <v-card max-width="50em" class="mx-auto">
    <v-toolbar flat>
      <v-row align="center">
        <v-col cols="auto">
          <v-btn exact icon :to="{ name: 'cameras' }">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-toolbar-title> Register camera </v-toolbar-title>
        </v-col>
      </v-row>
    </v-toolbar>

    <v-form @submit.prevent="add_camera()">
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field label="Camera name" v-model="new_camera.name" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field label="Stream URL" v-model="new_camera.stream_url" />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field label="Frame URL" v-model="new_camera.frame_url" />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn type="submit" text :loading="loading">Register</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "AddCamera",
  components: {},
  data() {
    return {
      loading: false,
      new_camera: {
        name: null,
        stream_url: null,
        frame_url: null,
      },
    }
  },
  methods: {
    add_camera() {
      this.loading = true
      const url = `${process.env.VUE_APP_API_URL}/cameras`
      this.axios
        .post(url, this.new_camera)
        .then(() => {
          this.$router.push({ name: "cameras" })
        })
        .catch((error) => {
          alert(error)
          console.error(error)
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>

<style scoped></style>
