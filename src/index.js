import ReactDOM from 'react-dom';
import { CarDetails } from './CarDetails';

const data = {
    model: 'gallardo',
    year: 2015,
    color: 'white'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
render.root(<CarDetails data={data} />);