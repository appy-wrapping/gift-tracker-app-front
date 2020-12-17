import { removeGift, addGift, editGift } from "./state";
import axios from "../../axios";

export const getGifts = () => {
	return (dispatch) => {
		axios.get("friends/1/gifts").then(({ data }) => {
			data.data.forEach((gift) => {
				dispatch(
					addGift({
						id: gift.id,
						item_name: gift.item_name,
						price: gift.price,
						bought: false,
						total: 0.0,
						friend_id: 1,
					})
				);
			});
		});
	};
};

export const deleteGift = (id) => {
	return (dispatch) => {
		axios.delete(`gifts/${id}`).then(dispatch(removeGift(id)));
	};
};

export const postGift = ({ item_name, price }) => {
	return (dispatch) => {
		axios
			.post("friends/1/gifts", {
				item_name: item_name,
				price: price,
			})
			.then(({ data }) => {
				dispatch(
					addGift({
						id: data.id,
						item_name: data.item_name,
						price: data.price,
						bought: false,
						total: 0.0,
						friend_id: data.friend_id,
					})
				);
			});
	};
};

export const patchGift = ({ item_name, price, bought, id }) => {
	return (dispatch) => {
		axios
			.patch(`gifts/${id}`, {
				item_name: item_name,
				price: price,
				bought: bought,
			})
			.then(({ data }) => {
				dispatch(
					editGift({
						item_name: data.item_name,
						price: data.price,
						bought: data.bought,
					})
				);
			});
	};
};

// export const putStep = (step) => {
// 	return (dispatch) => {
// 		// make a PUT request
// 		axios
// 			.put("/", {
// 				// pass along the data to the API
// 				// can pass in a regular object literal
// 				// axios will convert into JSON
// 				step: step,
// 			})
// 			.then(({ data }) => {
// 				// get the step result off the data
// 				// pass it along to the existing saveSettings action
// 				dispatch(saveSettings(data.data.step));
// 			});
// 	};
// };
