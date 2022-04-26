<template>
  <v-card
    max-width="50em"
    class="mx-auto">
    <v-card-title>
      Camera viewer
    </v-card-title>
    <v-card-text>
      <p>Version {{version}}</p>
      <p>Developed and maintained by <a href="https://maximemoreillon.com">Maxime Moreillon</a></p>
    </v-card-text>
  </v-card>
</template>

<script>
import {version} from '../../package.json'

export default {
  nane: 'About',
  data(){
    return {
      version,
    }
  }
}
</script>