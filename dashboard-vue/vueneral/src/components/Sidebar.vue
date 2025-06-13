<template>
  <v-navigation-drawer v-model="drawer" id="navDrawer">
    <br />
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
      title="John Leider"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Home"
        value="home"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-forum"
        title="About"
        value="about"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);
const drawer = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<style>
#navDrawer {
  max-width: 25%;
}
</style>
