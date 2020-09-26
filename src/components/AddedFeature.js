import React from "react";
import { connect } from "react-redux";
import { removeNewFeature } from "../actions/carAction";

const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => {
          props.removeNewFeature(props.feature);
        }}
        className="button"
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, { removeNewFeature })(AddedFeature);
