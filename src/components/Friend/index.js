import { connect } from "react-redux";
import Friend from './Friend';
import { patchFriend } from '../../data/actions/api';

const mapStateToProps = (state) => {

    return {
        id: state.friends[0].id,
        name: state.friends[0].name,
        budget: state.friends[0].budget
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editFriend: ({id, name, budget}) => {
            dispatch(patchFriend({id, name, budget}));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Friend);