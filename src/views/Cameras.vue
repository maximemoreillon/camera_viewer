<template>
  <div class="cameras">
    <h1>Cameras</h1>

    <div class="cameras_wrapper">

      <div
        class="camera"
        v-for="(camera, index) in cameras"
        v-bind:key="`camera_${index}`">

        <img :src="camera_url(camera)">
        <span class="name">
          {{camera.name}}
        </span>

      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: 'Cameras',
  components: {

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
      .catch(error => {console.error(error)})
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

}

.camera {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid #dddddd;
  border-radius: 0.5em;
}

.camera img {
  width: 20em;
}

.camera .name {
  font-size: 200%;
  margin-top: 0.5em;
}


</style>
