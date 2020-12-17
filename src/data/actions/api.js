import { removeGift, addGift, editGift } from "./state";
import axios from "../../axios";

export const getGifts = () => {
	return (dispatch) => {
		axios.get("friends/1/gifts").then(({ data }) => {
			// console.log(data);
			data.data.map((gift) => {
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
		//send id to api to delete gift
		//then wait for response and dispatch action to redux when response comes back
		dispatch(removeGift(id));
	};
};

export const postGift = ({ item_name, price }) => {
	return (dispatch) => {
		dispatch(
			addGift({
				id: 12,
				item_name: item_name,
				price: price,
				bought: false,
				total: 0.0,
				friend_id: 1,
			})
		);
	};
};

export const patchGift = ({ item_name, price, bought, id }) => {
	return (dispatch) => {
		dispatch(
			editGift({
				id: id,
				item_name: item_name,
				price: price,
				bought: bought,
			})
		);
	};
};
