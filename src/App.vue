<template>
  <AppTemplate :options="options">
    <template v-slot:nav>
      <v-list dense nav>
        <v-list-item
          v-for="(item, index) in nav"
          :key="`nav_item_${index}`"
          :to="item.to"
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </AppTemplate>
</template>

<script>
import AppTemplate from "@moreillon/vue_application_template_vuetify"
export default {
  name: "App",

  components: {
    AppTemplate,
  },

  data: () => ({
    options: {
      title: "Camera viewer",
      login_url: process.env.VUE_APP_LOGIN_URL,
      identification_url: process.env.VUE_APP_IDENTIFICATION_URL,
      oidc: {
        authority: process.env.VUE_APP_OIDC_AUTHORITY,
        client_id: process.env.VUE_APP_OIDC_CLIENT_ID,
        extraQueryParams: {
          audience: process.env.VUE_APP_OIDC_AUDIENCE,
        },
      },
    },
    nav: [
      { title: "Cameras", to: { name: "cameras" }, icon: "mdi-cctv" },
      {
        title: "About",
        to: { name: "about" },
        icon: "mdi-information-outline",
      },
    ],
  }),
  methods: {},
}
</script>
