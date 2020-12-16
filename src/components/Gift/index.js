// mapstatetoprops here
// pass into Gift.js
// put that data from Gift.js into state
import { deleteGift, patchGift, getGifts } from "../../data/actions/api";

import Gift from "./Gift";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
	return {
		deleteGift: (id) => {
			dispatch(deleteGift(id));
		},
		editGift: (gift) => {
			dispatch(patchGift(gift));
		},
		getGifts: () => {
			dispatch(getGifts());
		},
	};
};

export default connect(null, mapDispatchToProps)(Gift); // wraps the component with mapStateToProps
