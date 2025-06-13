<template>
  <v-card class="mx-auto" hover style="display: inline-block">
    <div id="cardContainer">
      <v-card-title> {{ title }}</v-card-title>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </div>
  </v-card>
</template>

<script setup>
defineProps({
  title: String,
});
</script>

<style></style>
