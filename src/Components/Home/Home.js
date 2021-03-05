import React from "react";
// import { addToCart } from "../../Redux/Actions/actions";
// import { items } from "../../Redux/items";
function Home(props) {
  console.warn(props);
  let ListItems = props.items.map((item) => {
    return (
      <div key={item.id}>
        <div>
          <span>{item.title}</span>
          <p>{item.desc}</p>
          <span>
            <b>{item.price}</b>
          </span>
          <button onClick={() => props.addToCart(item.id)}> add to cart</button>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <h1>shoes</h1>
      <div>{ListItems}</div>
    </div>
  );
}

export default Home;
