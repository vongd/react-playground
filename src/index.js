import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.scss';

class App extends Component {

  render() {
    return (
      <div className="outer-container">
        <div className="container">
          <div className="header"></div>
          <div className="card">
            <div className="card-title">
              <h2 className="card-title-text">Things!</h2>
            </div>
            <div className="card-supporting-text">
             This is the description of my card. It tells you
             a little about the main content.
            </div>
            <div className="card-actions">
              <a className="button action-button ripple-effect">
                Do things
              </a>
            </div>
          </div>
        </div>
        <div className="flex-container">
          <div className="flex-card">
            <div className="flex-card-title">
              <h2 className="flex-card-title-text">Things!</h2>
            </div>
            <div className="flex-card-supporting-text">
             This is the description of my card. It tells you
             a little about the main content.
            </div>
            <div className="flex-card-actions">
              <a className="flex-button flex-action-button flex-ripple-effect">
                Do things
              </a>
            </div>
          </div>
        </div>
      </div>
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
