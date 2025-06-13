<template>
  <v-app>
    <v-app-bar
      :elevation="0"
      rounded
      id="navbar-container"
      scroll-behavior="hide"
    >
      <Navbar @toggle-drawer="drawer = !drawer" />
    </v-app-bar>
    <Sidebar v-model="drawer" />
    <v-main>
      <div style="position: fixed; right: 0">
        <BaseCard title="Vue">
          <img
            src="/home/intern/Personal/vue-dashboard/vue-dashboard-test/dashboard-vue/vueneral/src/assets/logo.png"
            alt="logo"
            style="max-width: 50px; max-height: 50px"
          />
          <p>Hello there</p>
        </BaseCard>
        <BarChart title="Bar Chart"></BarChart>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import BaseCard from "./components/BaseCard.vue";
import Navbar from "/home/intern/Personal/vue-dashboard/vue-dashboard-test/dashboard-vue/vueneral/src/components/Navbar.vue";
const drawer = ref(false);
</script>

<style scoped>
#navbar-container {
  border-bottom: 2px solid lightgrey;
}
</style>
