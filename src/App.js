import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import * as actions from './state/actionCreators';

const App = ({ buyItem, removeFeature, vehicle }) => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={vehicle.car} />
        <AddedFeatures car={vehicle.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={vehicle.store} />
        <Total car={vehicle.car} additionalPrice={vehicle.additionalPrice} />
      </div>
    </div>
  );
};

export default connect(
  state => state,
  actions,
)(App);
