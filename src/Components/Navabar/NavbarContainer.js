import { connect } from "react-redux";
import Navbar from "./Navbar";
import { searchItems } from "../../Redux/Actions/actions";

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    cartItems: state.cartItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchItem: (text) => dispatch(searchItems(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
