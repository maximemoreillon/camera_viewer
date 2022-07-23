<template>
  <div id="app">
    <AppTemplate
      :options="options">

      <template v-slot:nav>
        <router-link :to="{ name: 'cameras'}">
          <span>Cameras</span>
        </router-link>
        <router-link :to="{ name: 'about'}">
          <span>About</span>
        </router-link>

      </template>


    </AppTemplate>
  </div>
</template>

<script>
import AppTemplate from '@moreillon/vue_application_template'


export default {
  name: 'app',
  components: {
    AppTemplate,
  },
  data(){
    return {
      options: {
        title: 'Cameras',
        authenticate: true,
        login_url: process.env.VUE_APP_LOGIN_URL,
        identification_url: process.env.VUE_APP_IDENTIFICATION_URL,

      },
    }
  },
  methods: {

  }

}
</script>


<style>
.material-design-icon__svg {
  bottom: 0 !important;
}
</style>
