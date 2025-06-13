<template>
  <BaseCard :title="title" style="max-width: 400px">
    <Radar :data="data" :options="options" />
  </BaseCard>
</template>

<script setup>
import { computed } from "vue";
import { useTheme } from "vuetify"; // Vuetify 3
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import { Radar } from "vue-chartjs";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
);

defineProps({
  title: String,
});

const theme = useTheme();

const isDark = computed(() => theme.global.name.value === "dark");
const textColor = computed(() => (isDark.value ? "#fff" : "#222"));

const data = {
  labels: [
    "Matches Played",
    "Minutes Played",
    "Goals",
    "Goals Per 90 Min",
    "Assists",
    "Progressive Dribbles",
    "Successful Dribbles",
  ],
  datasets: [
    {
      label: "Bruno Fernandes",
      data: [36, 27.66, 16, 8.7, 26, 11.9, 12.19],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Matheus Cunha",
      data: [33, 25.44, 30, 17.7, 14, 11.1, 7.53],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};

const options = computed(() => ({
  responsive: true,
  plugins: {
    legend: {
      labels: { color: textColor.value },
    },
    title: {
      display: false,
      color: textColor.value,
    },
    tooltip: {
      bodyColor: textColor.value,
    },
  },
  scales: {
    r: {
      pointLabels: { color: textColor.value },
      angleLines: { color: isDark.value ? "#555" : "#ccc" },
      grid: { color: isDark.value ? "#555" : "#ccc" },
      ticks: { color: textColor.value },
    },
  },
  elements: {
    line: { borderWidth: 3 },
  },
}));
</script>
