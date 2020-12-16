// import react from "react";
// import Inputs from "./Inputs";

const Row = ({ item_name, price, bought }) => (
	<>
		<td className="tdNarrow"><button class="tableButtons deleteButton"></button></td>
		<td className="tdNarrow"><button class="tableButtons editButton"></button></td>
		<td class="tableInputs">{item_name}</td>
		<td class="tableInputs">{price}</td>
		<td class="tableInputs"><button className={bought ? "button tickButton" : "button crossButton"}></button></td>
	</>
);

export default Row;
