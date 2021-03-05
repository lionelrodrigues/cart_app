import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    cartItems: state.cartItem,
  };
};

export default connect(mapStateToProps)(Navbar);
