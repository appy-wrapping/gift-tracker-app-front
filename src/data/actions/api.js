import { removeGift } from "./state";
export const deleteGift = (id) => {
	return (dispatch) => {
		//send id to api to delete gift
		//then wait for response and dispatch action to redux when response comes back
		dispatch(removeGift(id));
	};
};
