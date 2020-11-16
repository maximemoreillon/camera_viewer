<template>
  <div id="app">
    <AppTemplate
      :authenticate="true"
      applicationName="Cameras">

      <template v-slot:navigation>
        <router-link :to="{ name: 'cameras'}">
          <span>Cameras</span>
        </router-link>

      </template>


    </AppTemplate>
  </div>
</template>

<script>
import AppTemplate from '@moreillon/vue_application_template_flex'


export default {
  name: 'app',
  components: {
    AppTemplate,
  },

}
</script>


<style>
.material-design-icon__svg {
  bottom: 0 !important;
}
</style>
