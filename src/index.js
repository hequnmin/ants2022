import React from 'react';
//import * as ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.scss';

//ReactDom.render(<App />, document.getElementById('root'))
//const root = ReactDom.createRoot(document.getElementById('root'));
const root = createRoot(document.getElementById('root'));

root.render(<App />);

