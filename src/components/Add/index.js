// mapstatetoprops here
// pass into Gift.js
// put that data from Gift.js into state
import { postGift } from "../../data/actions/api";

import Add from "./Add";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
	return {
		addGift: (gift) => {
			dispatch(postGift(gift));
		},
	};
};

export default connect(null, mapDispatchToProps)(Add); // wraps the component with mapStateToProps
