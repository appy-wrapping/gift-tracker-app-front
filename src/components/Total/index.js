import { connect } from "react-redux";
import Total from './Total';
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Total);