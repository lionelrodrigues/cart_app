import React from "react";

function Cart(props) {
  console.log("cart", props);
  const cartItems = props.addedItems.map((item) => {
    return (
      <div className="item-container" key={item.id}>
        <b>{item.id}</b> <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <span>{item.price}</span>
        <span>quantity {item.quantity}</span>
        <button onClick={() => props.removeFromCart(item.id)} className="btn">
          remove item
        </button>
      </div>
    );
  });
  console.log(cartItems);
  return (
    <div className="container">
      {cartItems.length > 0 ? cartItems : <p>nothing here</p>}
      <div className="cart-total">
        <p> your total={props.total}</p>
      </div>
    </div>
  );
}

export default Cart;
