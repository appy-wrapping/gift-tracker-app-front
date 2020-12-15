// import react from "react";
import Inputs from "./Inputs";

const Editing = ({
	item_name,
	price,
	bought,
	handleGiftName,
	handlePrice,
	handleBought,
}) => (
	<>
		<Inputs
			label="Gift Name"
			value={item_name}
			checkbox={false}
			handleChange={handleGiftName}
		/>
		<Inputs
			label="Price"
			value={price}
			checkbox={false}
			handleChange={handlePrice}
		/>
		<Inputs label="Bought" checkbox={true} handleChange={handleBought} />
	</>
);

export default Editing;
