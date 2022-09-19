import ReactDOM from 'react-dom';
import { Sum } from './Sum';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sum  numbers={[1,3,4,5,5]} />)