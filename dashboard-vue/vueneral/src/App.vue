<template>
  <v-app>
    <v-app-bar
      :elevation="6"
      rounded
      id="navbar-container"
      scroll-behavior="hide"
    >
      <Navbar />
    </v-app-bar>
    <v-main style="max-width: 50%; right: 0px">
      <BaseCard title="Vue">
        <img
          src="/home/intern/Personal/vue-dashboard/vue-dashboard-test/dashboard-vue/vueneral/src/assets/logo.png"
          alt="logo"
          style="max-width: 50px; max-height: 50px"
        />
        <p>Hello there</p>
      </BaseCard>
      <BarChart title="Bar Chart"></BarChart>
    </v-main>
  </v-app>
</template>

<script setup>
import BaseCard from "./components/BaseCard.vue";
import Navbar from "/home/intern/Personal/vue-dashboard/vue-dashboard-test/dashboard-vue/vueneral/src/components/Navbar.vue";
</script>

<style scoped>
#navbar-container {
  border-bottom: 2px solid lightgrey;
}
</style>
