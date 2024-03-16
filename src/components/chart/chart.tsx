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
                border: {
                    color: borderColor
                },
                ticks: { display: false },
                grid: { display: false }
            },
            x: {
                border: {
                    color: borderColor
                },
                ticks: { display: false },
                grid: { display: false }
            },
        },
        elements: {
            point: { radius: 0 }
        },
    };

    const labels = new Array(7).fill("");

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
            <div className="centre">
                <h2>{timeFrame} </h2> <span>{headingSubtitle}</span>
            </div>
            <Line data={data} options={options} />
        </div>)
}

export default Chart;
