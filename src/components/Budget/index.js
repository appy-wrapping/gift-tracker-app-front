import { connect } from "react-redux";
import Budget from './Budget';
import { patchFriend } from '../../data/actions/api';

const mapStateToProps = (state) => {

    return {
        id: state.friends[0]?.id,
        name: state.friends[0]?.name,
        propBudget: state.friends[0]?.budget
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editFriend: ({ id, name, budget }) => {
            dispatch(patchFriend({ id, name, budget }));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Budget);