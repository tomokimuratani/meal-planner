import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart() {
  const options = {
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: getChartTitle(),
      },
      grid: {
        display: false,
      },
    },
  };
  const labels = ["月", "火", "水", "木", "金", "土", "日"];

  const data = {
    labels,
    datasets: [
      {
        label: "1日あたりの取得カロリー",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 6000 })),
        backgroundColor: "rgb(152, 251, 152)",
      },
    ],
  };
  function getChartTitle() {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const title = `${month}月`;
    return title;
  }
  return <Bar options={options} data={data} />;
}
