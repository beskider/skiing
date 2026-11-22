import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root } from 'views/Root';
import 'assets/styles/fonts.css';
import 'assets/styles/normalize.css';

import './i18n'; // import i18n configuration

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
