import Chart from '../chart/chart';
import './chartsContainer.scss';

const ChartsContainer: React.FC = () => {
    return (<div className='chart-container'>
        <h2>Activity So far</h2>

        <Chart
            dataValue={[122, 52, 82, 12, 42, 62, 12, 42, 72, 32, 2, 42, 12, 2, 142, 22, 62, 142, 128, 65, 21, 92, 72, 32, 92, 32, 72, 62, 122, 21]}
            timeFrame='today'
            borderColor='#FF204E'
        />

        <Chart
            dataValue={[122, 52, 82, 12, 42, 62, 12, 42, 72, 32, 2, 42, 12, 2, 142, 22, 62, 142, 128, 65, 21, 92, 72, 32, 92, 32, 72, 62, 122, 21]}
            timeFrame='this month'
            borderColor='#A0153E'
        />

        <Chart
            dataValue={[122, 52, 82, 12, 42, 62, 12, 42, 72, 32, 2, 42, 12, 2, 142, 22, 62, 142, 128, 65, 21, 92, 72, 32, 92, 32, 72, 62, 122, 21]}
            timeFrame='this year'
            borderColor='#5D0E41'
        />
    </div>)
}

export default ChartsContainer;
