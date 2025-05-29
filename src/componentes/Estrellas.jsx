import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Puntaje',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['1','2','3','4','5'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Estrellas',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: 'rgb(225, 234, 0)',
      stack: 'Stack 1',
    },
  ],
};

export function Estrellas() {
  return <Bar options={options} data={data} />;
}
