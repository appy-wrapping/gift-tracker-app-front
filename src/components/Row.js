// import react from "react";
// import Inputs from "./Inputs";

const Row = ({ item_name, price, bought }) => (
	<>
		<td><button class="tableButtons deleteButton">X</button></td>
		<td><button class="tableButtons editButton">/</button></td>
		<td class="tableInputs">{item_name}</td>
		<td class="tableInputs">{price}</td>
		<td class="tableInputs">{bought ? "Y" : "N"}</td>
	</>
);

export default Row;
