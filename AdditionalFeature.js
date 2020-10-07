import React, {  } from 'react';
// import { initialState, reducer } from '../reducers/featReducers'
const AdditionalFeature = props => {

  return (
    <li>
     
      <button className="button" onClick={() => props.dispatch({ type: 'ADD',id:props.feature.id })}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
