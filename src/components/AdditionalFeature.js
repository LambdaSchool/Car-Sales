import React from 'react';

import { addFeature } from './actions/featureActions';

const AdditionalFeature = props => {
  console.log('from AdditionalFeature', props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
        onClick={() => addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
