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
  ChartData,
  ChartOptions,
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

ChartJS.defaults.color = '#A3A7A9';

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false,
      labels: {
        font: {
          family: 'jost',
        },
      },
    },
    tooltip: {
      yAlign: 'bottom',
      displayColors: false,
      backgroundColor: '#404649',
      titleAlign: 'center',
      titleFont: {
        size: 15,
      },
      padding: {
        right: 24,
        left: 24,
        top: 8,
      },
      callbacks: {
        title: function () {
          const value = this.dataPoints[0].raw;
          return `${value}`;
        },
        label: function () {
          return '';
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
  hover: {
    intersect: false,
  },
  // showLine: false,
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

const data: ChartData<'line'> = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => Math.round(Math.random() * 100)),
      borderColor: '#EA515E',
      backgroundColor: (context: ScriptableContext<'line'>) => {
        if (!context.chart.chartArea) return;
        const {
          ctx,
          chartArea: { top, bottom },
        } = context.chart;
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBg.addColorStop(0, 'rgba(234, 81, 94, 0.4)');
        gradientBg.addColorStop(1, 'rgba(255, 255, 255, 0)');
        return gradientBg;
      },
      tension: 0.4,
      pointStyle: 'circle',
      pointRadius: 5,
      pointHoverRadius: 5,
      pointBackgroundColor: '#ffffff00',
      pointBorderWidth: 0,
      pointHoverBorderWidth: 2.5,
      pointHoverBorderColor: '#EA515E',
      pointHoverBackgroundColor: 'white',
    },
  ],
};

const AppointmentsChart = () => {
  return (
    <div className='mt-5 w-full relative'>
      <Line options={options} data={data} />
    </div>
  );
};

export default AppointmentsChart;
