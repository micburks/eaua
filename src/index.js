import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider as StyletronProvider} from "styletron-react";
import {Client as Styletron} from "styletron-engine-atomic";
import {schemeCategory10} from 'd3';

const engine = new Styletron();

const restaurants = [{
  name: 'Chico\'s',
  address: '1331 addr blvd ne',
  facets: [{
    label: 'Decor',
    value: .0625,
  }, {
    label: 'Classy dinner',
    value: .5,
  }, {
    label: 'Customer service',
    value: .125,
  }, {
    label: 'A',
    value: .03125,
  }, {
    label: 'Cocktails',
    value: .25,
  }, {
    label: 'B',
    value: 0.03125
  }],
}];

const colors = schemeCategory10
  .sort(() =>  Math.random() > .5)

ReactDOM.render((
  <StyletronProvider value={engine}>
    <App restaurants={restaurants} colors={colors} />
  </StyletronProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
