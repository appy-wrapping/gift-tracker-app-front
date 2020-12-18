import App from "./App";
import { connect } from "react-redux";
import { patchFriend } from '../../data/actions/api';

import { getGifts, getFriends } from "../../data/actions/api";

const mapStateToProps = (state) => {
	return {
		gifts: state.gifts,
		friendsLoaded: state.friendsLoaded,
		budget: state.friends[0]?.budget,
		id: state.friends[0]?.id,
		name: state.friends[0]?.name,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getGifts: () => {
			dispatch(getGifts());
		},
		getFriends: () => {
			dispatch(getFriends());
		},
		editFriend: ({ id, name, budget }) => {
			dispatch(patchFriend({ id, name, budget }));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
