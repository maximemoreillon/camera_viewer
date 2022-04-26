<template>
  <AppTemplate
    :options="options"
    @user="get_user($event)">

    <template v-slot:nav>
      <v-list
        dense
        nav >
        <v-list-item
          v-for="(item, index) in nav"
          :key="`nav_item_${index}`"
          :to="item.to"
          exact>
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>

  </AppTemplate>
</template>

<script>
import AppTemplate from '@moreillon/vue_application_template_vuetify'
export default {
  name: 'App',

  components: {
    AppTemplate
  },

  data: () => ({
    options: {
      title: 'Camera viewer',
      login_url: process.env.VUE_APP_LOGIN_URL,
      identification_url: process.env.VUE_APP_IDENTIFICATION_URL,
    },
    nav: [
      {title: 'Home', to: {name: 'Home'}, icon: 'mdi-home'},
      {title: 'About', to: {name: 'About'}, icon: 'mdi-information-outline'},
      {title: 'Misc', to: {name: 'Misc'}, icon: 'mdi-menu'},
    ]
  }),

  methods: {
    get_user(user){
      console.log(user)
    }
  }
};
</script>