<template>
  <v-switch
    v-model="isDark"
    @update:model-value="toggleTheme"
    hide-details
    class="theme-switch"
  >
    <template #thumb>
      <v-icon>
        {{ isDark ? "mdi-weather-night" : "mdi-white-balance-sunny" }}
      </v-icon>
    </template>
  </v-switch>
</template>
<script setup>
import { ref, watch } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const isDark = ref(theme.global.current.value.dark);

watch(
  () => theme.global.current.value.dark,
  (val) => (isDark.value = val)
);

function toggleTheme() {
  const newTheme = isDark.value ? "dark" : "light";
  theme.global.name.value = newTheme;
  localStorage.setItem("theme", newTheme);
}
</script>
<style>
.theme-switch .v-selection-control__input {
  display: flex;
  align-items: center;
  justify-content: center;
}
.theme-switch .v-icon {
  font-size: 18px;
}
.theme-switch .v-switch__thumb {
  width: 30px !important; /* Change to your desired size */
  height: 30px !important;
  min-width: 30px !important;
  min-height: 30px !important;
  font-size: 24px !important; /* Ensures icon scales too */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; /* Keep it circular */
}
</style>
