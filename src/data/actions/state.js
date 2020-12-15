export const removeGift = (id) => {
	return {
		type: "REMOVE_GIFT",
		payload: id,
	};
};
