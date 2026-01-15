"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#d1d5db', // gray-300
        font: {
          size: 10,
          family: "'Inter', sans-serif",
          weight: 'bold' as const
        },
      },
      border: {
        display: false
      }
    },
    y: {
      display: false, // Hide Y axis as per design
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false, // Disable default tooltips to match distinct design (avatars on points)
    }
  },
  elements: {
    line: {
      tension: 0.4, // Smooth curves
    },
    point: {
      radius: 0, // Hide points by default
      hitRadius: 10,
    }
  }
};

const labels = ['W1', ' ', ' ', ' ', ' ', 'W3', ' ', ' ', ' ', ' ', 'W5', ' ', ' ', ' ', ' ', 'W7', ' ', ' ', ' ', ' ', 'W9', ' ', ' ', ' ', ' ', 'W11'];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Sales',
      data: [35, 42, 38, 45, 40, 50, 55, 52, 58, 54, 65, 60, 68, 70, 65, 75, 72, 78, 80, 75, 85, 82, 88, 92, 90, 95], // Mock trend data
      borderColor: '#F43F5E', // Rose-500
      borderWidth: 2,
      backgroundColor: (context: ScriptableContext<'line'>) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(255, 230, 230, 0.5)'); // Light pink
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        return gradient;
      },
    },
  ],
};

export default function SalesLineChart() {
  return <Line options={options} data={data} />;
}
