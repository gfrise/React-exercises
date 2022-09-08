import ReactDOM from 'react-dom';
import { Counter } from './Counter.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter firstValue={0} increment={1} interval={1000} />);