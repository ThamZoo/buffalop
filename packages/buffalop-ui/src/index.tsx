import React from 'react';

import { createRoot } from 'react-dom/client';

import Router from './containers/layout';

import './root.scss';

function main() {
  console.log('Version:', __VERSION__);
  const dom: any = document.getElementById('root');
  createRoot(dom).render(<Router />);
}

window.addEventListener('load', main);
