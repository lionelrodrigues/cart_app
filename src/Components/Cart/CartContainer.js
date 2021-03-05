import { connect } from "react-redux";
import Cart from "./Cart";
import { removeFromCart } from "../../Redux/Actions/actions";
const mapStateToProps = (state) => {
  return {
    addedItems: state.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
