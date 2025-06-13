<template>
  <v-card class="mx-auto" hover style="max-width: 200px; display: inline-block">
    <v-card-title> {{ title }}</v-card-title>
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
