import React from 'react';

import { connect } from 'react-redux';
import { addFeature } from './actions/featureActions';

import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  console.log('from AdditionalFeatures', props);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={props.addFeature} />
          ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
        )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    AdditionalFeatures: state.AdditionalFeatures
  }
};

export default connect(
  mapStateToProps, { addFeature }
)(AdditionalFeatures);
