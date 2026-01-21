import { createRoot } from 'react-dom/client';
import './index.css'
import KakaoBankApp from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<KakaoBankApp />);
