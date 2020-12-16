const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_GIFT":
			return {
				...state,
				gifts: [...state.gifts, action.payload],
			};
		case "REMOVE_GIFT":
			return {
				...state,
				gifts: state.gifts.filter((gift) => gift.id !== action.payload),
			};

		case "EDIT_GIFT":
			return {
				...state,
				gifts: state.gifts.map((gift) => {
					if (gift.id !== action.payload.id) {
						return gift;
					} else {
						return {
							...gift,
							...action.payload,
						};
					}
				}),
			};

		default:
			return state;
	}
};

export default reducer;
