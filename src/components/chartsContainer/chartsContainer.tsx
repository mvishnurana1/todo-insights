import Chart from '../chart/chart';
import { getMonth, getTodaysDate, getYear } from '../../helper/dates';
import './chartsContainer.scss';

const ChartsContainer: React.FC = () => {
    return (<div className='chart-container'>
        <h2 className='centre'>Activity So far</h2>

        <div style={{ marginTop: '2rem' }}>
            <Chart
                borderColor='#FF204E'
                dataValue={[122, 52, 82, 12, 42, 62, 12, 42, 72, 32, 2, 42, 12, 2, 142, 22, 62, 142, 128, 65, 21, 92, 72, 32, 92, 32, 72, 62, 122, 21]}
                timeFrame= { `${getTodaysDate()}th, ${getMonth().toUpperCase()}` }
            />

            <Chart
                borderColor='#A0153E'
                dataValue={[122, 52, 82, 12, 42, 62, 12, 42, 72, 32, 2, 42, 12, 2, 142, 22, 62, 142, 128, 65, 21, 92, 72, 32, 92, 32, 72, 62, 122, 21]}
                headingSubtitle={' till date'}
                timeFrame={ `${getMonth().toUpperCase()}` }
            />

            <Chart
                borderColor='#FDA403'
                dataValue={[122, 52, 82, 12, 42, 62, 12, 42, 72, 32, 2, 42, 12, 2, 142, 22, 62, 142, 128, 65, 21, 92, 72, 32, 92, 32, 72, 62, 122, 21]}
                headingSubtitle=' so far'
                timeFrame={ `${getYear().toUpperCase()}` }
            />
        </div>
    </div>)
}

export default ChartsContainer;
