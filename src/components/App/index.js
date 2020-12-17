import App from "./App";
import { connect } from "react-redux";

import { getGifts, getFriends } from "../../data/actions/api";

const mapStateToProps = (state) => {
	return {
		gifts: state.gifts,
		friendsLoaded: state.friendsLoaded
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getGifts: () => {
			dispatch(getGifts());
		},
		getFriends: () => {
			dispatch(getFriends());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
