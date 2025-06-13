<template>
  <BaseCard :title="title" style="max-width: 400px">
    <Bar :data="data" :options="options" />
  </BaseCard>
</template>
<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
import { useBackgroundColor } from "vuetify/lib/composables/color.mjs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

defineProps({
  title: String,
});

const data = {
  labels: ["January", "February", "March"],
  datasets: [
    {
      label: "Sales",
      data: [40, 20, 12],
      backgroundColor: ["#1976D2", "#E53935", "#43A047"],
    },
  ],
};

const options = { responsive: true };
</script>
<style lang=""></style>
