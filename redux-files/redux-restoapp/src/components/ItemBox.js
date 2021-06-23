import React from 'react';
import './Menu.css';
import { connect } from 'react-redux'

class ItemBox extends React.Component {

  addToCartBtn = () => {
    let cartItem = this.props.item;
    this.props.addToCart(cartItem);
  }

  render() {
   
    const { name, price, image, } = this.props.item;

    return (
      <div>
        <div className="ItemBox">
          <img src={image} width={100} alt={name} />
          <p>{name}</p>
          <p>Php {price}</p>
        <button onClick={this.addToCartBtn}>Add to Cart</button>
        </div>
        
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addToCart: cartItem => dispatch({
      type: 'ADD_TO_CART', payload: cartItem
    })
  };
};
export default connect(null, mapDispatchToProps) (ItemBox);
