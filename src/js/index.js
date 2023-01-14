// styles
import './index.scss';
import 'semantic-ui-react'

// components
import App from './App';

// react app
import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab='home' />)

// ReactDom.render(
//     <App />,
//     document.getElementById('root')
// )

