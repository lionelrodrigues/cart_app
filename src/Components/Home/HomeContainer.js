import Home from "./Home";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/Actions/actions";
const mapStatetoProp = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchtoprops = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(mapStatetoProp, mapDispatchtoprops)(Home);
