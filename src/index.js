import React from 'react';
import ReactDOM from 'react-dom';

import HelloMessage from './HelloWorld';

const mountNode = document.getElementById('mount');

ReactDOM.render(<HelloMessage />, mountNode);
