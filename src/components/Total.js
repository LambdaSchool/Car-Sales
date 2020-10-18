import React from 'react';
import {connect} from 'react-redux'

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};
const mapStateToProps = ({car,additionalPrice})=>{

  return {price: car.price,
          additionalPrice}
}

export default connect(mapStateToProps,{}) (Total);
