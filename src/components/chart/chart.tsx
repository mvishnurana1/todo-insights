import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./chart.scss";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface propType {
    dataValue: number[],
    timeFrame: string,
    borderColor: string,
    headingSubtitle?: string,
}

const Chart: React.FC<propType> = ({
    borderColor,
    dataValue,
    timeFrame,
    headingSubtitle
}) => {

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            data: {
                labels: { display: false }
            },
            title: { display: false }
        },
        scales: {
            y: {
                ticks: { display: false },
                grid: { display: false }
            },
            x: {
                ticks: { display: false },
                grid: { display: false }
            }
        },
        elements: {
            point: { radius: 0 }
        }
    };

    const labels = new Array(30).fill("");

    const data = {
        labels,
        datasets: [
            {
                borderColor: borderColor,
                data: dataValue,
                tension: 0.3
            }
        ],
    };

    return (
        <div>
            <h2 className="centre">
                <span>{timeFrame} {headingSubtitle}</span>
            </h2>
            <Line data={data} options={options} />
        </div>)
}

export default Chart;
