import { createRoot } from 'react-dom/client';
import TossApp from './App';

import './index.css'


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<TossApp />);
