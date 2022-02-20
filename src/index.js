// Import
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';

// Stores MobX
import GrayStore from './stores/grayStore';
import { Provider } from 'mobx-react';
const grayStore = new GrayStore();
const stores = { grayStore };

// ReactDOM
ReactDOM.render(<Provider { ...stores } ><App/></Provider>, $('#root')[0]);