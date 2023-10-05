<template>
  <v-app>
   <h1>Display Results Here <em>(this can be removed)</em></h1>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      shotData: {},
      shots: []
    }
  },

  mounted () {
    //* Sample Vuex call to get shot data.
    //* You can alter this as well if you see a better way to handle this action.
    // this.$store.dispatch('shots/allShots');
  },
};
</script>

<style></style>
