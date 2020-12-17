import App from "./App";
import { connect } from "react-redux";

import { getGifts } from "../../data/actions/api";

const mapStateToProps = (state) => {
	return {
		gifts: state.gifts,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getGifts: () => {
			dispatch(getGifts());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
