<template>
  <Bar :data="data" :options="options" />
</template>

<script>
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Bar,
  },
  data() {
    return {
      data: {
        labels: ["主次幹管", "分管", "支管"],
        datasets: [
          {
            label: "第一期",
            data: [8205, 100000, 180000],
            backgroundColor: ["#023047"],
          },
          {
            label: "第二期",
            data: [47991, 210000, 210000],
            backgroundColor: ["#219EBC"],
          },
          {
            label: "第三期",
            data: [42937, 260000, 210000],
            backgroundColor: ["#8ECAE6"],
          },
          {
            data: [27361, 260000, 200000],
            backgroundColor: ["#FB8500"],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 18,
                family: "Noto Sans TC",
              },
            },
          },
          x: {
            ticks: {
              font: {
                size: 24,
                weight: 500,
                family: "Noto Sans TC",
              },
            },
          },
        },
      },
    };
  },
};
</script>
