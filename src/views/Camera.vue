<template>
  <div class="cameras">

    <template v-if="loading ">
      <div class="loader">
        Loading camera...
      </div>
    </template>
    <template v-else-if="camera">
      <h1>{{camera.name || 'Unnamed camera'}}</h1>

      <p>
        <button type="button" @click="refresh()">Refresh</button>
      </p>



      <img :src="stream_url">

      <h2>Camera info</h2>
      <form @submit.prevent="update_camera()">

        <div class="">
          <label for="camera_name">Name</label>
          <input type="text" v-model="camera.name" id="camera_name">
        </div>
        <div class="">
          <label for="camera_name">URL</label>
          <input type="text" v-model="camera.url" id="camera_url">
        </div>
        <button type="submit">Update camera</button>
        <button type="button" @click="delete_camera()">Delete camera</button>
      </form>
    </template>


  </div>
</template>

<script>


export default {
  name: 'Camera',
  data: () => ({
    camera: null,
    loading: false,
  }),
  mounted(){
    this.get_camera()
  },
  methods: {
    get_camera() {
      this.loading = true
      const url = `${process.env.VUE_APP_API_URL}/cameras/${this.camera_id}`
      this.axios.get(url)
      .then( ({data}) => { this.camera = data })
      .catch(error => {
        alert(error)
        console.error(error)
      })
      .finally(() => {this.loading = false})
    },
    update_camera() {
      const url = `${process.env.VUE_APP_API_URL}/cameras/${this.camera_id}`
      this.axios.patch(url, this.camera)
      .then( () => { alert('Camera updated') })
      .catch(error => {
        alert(error)
        console.error(error)
      })
    },
    delete_camera() {
      if(!confirm(`Delete camera ${this.camera.name}?`)) return
      const url = `${process.env.VUE_APP_API_URL}/cameras/${this.camera_id}`
      this.axios.delete(url)
      .then( () => { this.$router.push({name: 'cameras'}) })
      .catch(error => {
        alert(error)
        console.error(error)
      })
    },
    refresh(){
      this.loading = true
      setTimeout(() => {this.loading = false}, 500)
    }
  },
  computed : {
    camera_id(){
      return this.$route.params.camera_id
    },
    stream_url(){
      return `${process.env.VUE_APP_API_URL}/cameras/${this.camera_id}/stream?jwt=${localStorage.jwt}`
    }
  },


}
</script>

<style scoped>
img {
  width: 100%;
  height: 60vh;
  object-fit: contain;
}

form > * {
  margin: 1em 0;
}

label, button {
  margin-right: 1em;
}

.loader{
  margin-top: 2em;
  text-align: center;
}


</style>
