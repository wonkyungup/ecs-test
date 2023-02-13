<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  watch: {
    '$vuetify.breakpoint.name' () {
      console.log(this.$vuetify.breakpoint.name)
    }
  }
};
</script>
