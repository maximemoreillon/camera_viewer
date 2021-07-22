<template>
  <div id="app">
    <AppTemplate
      :options="options"
      @user="get_user($event)">

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
        login_url: `${process.env.VUE_APP_AUTHENTICATION_API_URL}/login`,
        identification_url: `${process.env.VUE_APP_AUTHENTICATION_API_URL}/whoami`
      },
    }
  },
  methods: {
    get_user(user){
      if(!user) return
      this.$cookies.set('jwt', localStorage.jwt)
    }
  }

}
</script>


<style>
.material-design-icon__svg {
  bottom: 0 !important;
}
</style>
