// import react from "react";
// import Inputs from "./Inputs";

const Row = ({ item_name, price, bought }) => (
	<>
		<td>{item_name}</td>
		<td>{price}</td>
		<td>{bought ? "Y" : "N"}</td>
	</>
);

export default Row;
