<template>
  <v-app-bar-nav-icon></v-app-bar-nav-icon>

  <v-app-bar-title>Dashboard</v-app-bar-title>
  <v-btn icon="mdi-magnify"></v-btn>

  <ThemeToggle />

  <v-btn icon="mdi-dots-vertical"></v-btn>
</template>

<script setup>
import { ref } from "vue";
import ThemeToggle from "./ThemeToggle.vue";
const model = ref(false);
</script>
<style scoped></style>
