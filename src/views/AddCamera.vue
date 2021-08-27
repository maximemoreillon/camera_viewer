<template>
  <div class="cameras">
    <h1>Add Camera</h1>

    <form @submit.prevent="add_camera()">
      <div class="">
        <label for="camera_name">Name</label>
        <input type="text" v-model="new_camera.name" id="camera_name">
      </div>
      <div class="">
        <label for="camera_name">URL</label>
        <input type="text" v-model="new_camera.url" id="camera_url">
      </div>
      <button type="submit">Add camera</button>
    </form>






  </div>
</template>

<script>

export default {
  name: 'AddCamera',
  components: {

  },
  data(){
    return {
      new_camera: {
        name: null,
        url: null,
      }
    }
  },
  mounted(){

  },
  methods: {
    add_camera(){
      const url = `${process.env.VUE_APP_API_URL}/cameras`
      this.axios.post(url, this.new_camera)
      .then( () => { this.$router.push({name: 'cameras'}) })
      .catch(error => {
        alert(error)
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


form > * {
  margin: 1em 0;
}

label, button {
  margin-right: 1em;
}


</style>
