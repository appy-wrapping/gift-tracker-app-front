// import react from "react";
// import Inputs from "./Inputs";

const Row = ({ item_name, price, bought }) => (
	<>
		<td><button>X</button></td>
		<td><button>/</button></td>
		<td>{item_name}</td>
		<td>{price}</td>
		<td>{bought ? "Y" : "N"}</td>
	</>
);

export default Row;
