import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const App = () => {
  return <h1>hello, React with parcel</h1>;
};

ReactDOM.render(<App />, document.getElementById('app'));
