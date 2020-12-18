export const removeGift = (id) => {
	return {
		type: "REMOVE_GIFT",
		payload: id,
	};
};

export const addGift = ({ id, item_name, price, bought, total, friend_id }) => {
	return {
		type: "ADD_GIFT",
		payload: {
			id: id,
			item_name: item_name,
			price: price,
			bought: bought,
			total: total,
			friend_id: friend_id,
		},
	};
};

export const editGift = ({ id, item_name, price, bought }) => {
	return {
		type: "EDIT_GIFT",
		payload: {
			id: id,
			item_name: item_name,
			price: price,
			bought: bought,
		},
	};
};

export const editFriend = ({ id, name, budget }) => {
	return {
		type: "EDIT_FRIEND",
		payload: {
			id: id,
			name: name,
			budget: budget,
		},
	};
};

export const addFriend = ({ id, name, budget}) => {
	return {
		type: "ADD_FRIEND",
		payload: {
			id: id,
			name: name,
			budget: budget,
		},
	};
};
