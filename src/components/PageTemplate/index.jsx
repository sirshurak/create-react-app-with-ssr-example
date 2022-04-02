import React from 'react';
import logo from '../../logo.svg';

export default function PageTemplate({ page }) {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              This is the <b>{page}</b> page
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <a href="/">First Page</a>
            <a href="/second">Second Page</a>
          </header>
        </div>
      );
}