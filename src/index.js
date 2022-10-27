import React from 'react';
// 有新特性
import ReactDOM from 'react-dom/client';

// 老api
import React17DOM from 'react-dom';


import { AutoBatch, ClassAutoBatch } from './pages/AutoBatch';
import { TransitionDemo } from './pages/TransitionDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<TransitionDemo />);

// React17DOM.render(<ClassAutoBatch />, document.getElementById('root'));


// root.render(<AutoBatch />);

// React17DOM.render(<AutoBatch />, document.getElementById('root'));
// root.render(<AutoBatch />);
// React17DOM.render(<AutoBatch />, document.getElementById('root'));
// root.render(<TransitionDemo />);
