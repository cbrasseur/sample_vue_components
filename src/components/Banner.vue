<template>
  <div>
    <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
    >
      <img alt="Vue logo" src="../assets/logo.png">

      <v-spacer></v-spacer>

      <v-toolbar-title>
        <router-link to="/">
            <v-icon
                icon="mdi-home"
                color="white"
            >
              mdi-home
            </v-icon>
          Home
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/Cart">
          <v-icon
              icon="mdi-cart"
              color="white"
          >
            mdi-cart
          </v-icon>
        Cart
      </router-link>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Banner"
}
</script>

<style scoped>
</style>
