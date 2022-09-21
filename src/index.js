import { ClickCounter } from './ClickCounter';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ClickCounter onChange={onCounterChange} />);
