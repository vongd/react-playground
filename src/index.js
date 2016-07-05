import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

  render() {
    return (
      <h1>This is a thing</h1>
    );
  }
}

window.performance.mark('begin');
render(
  <App />,
  document.getElementById('content')
);
window.performance.mark('end');
window.performance.measure('Render <App />', 'begin', 'end');
