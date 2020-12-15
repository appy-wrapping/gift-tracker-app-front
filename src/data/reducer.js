const reducer = (state, action) => {
	switch (action.type) {
		case "REMOVE_GIFT":
			return {
				...state,
				gifts: state.gifts.filter((gift) => gift.id !== action.payload),
			};

		default:
			return state;
	}
};

export default reducer;
