import React from "react";
import { connect } from "react-redux";
// connect has to go towards the top of the file

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {
  console.log("state coming from reducer.js into App.js", props);

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // this state is connecting to our redux state coming from reducer.js, so I took it away from up top of App.js
  // grabbing the items in the return from the store and renaming as props
  console.log("MapStateToProps: ", state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

// *** STEP THREE - connect components ***
export default connect(
  mapStateToProps,
  {}
)(App);
