// import react from "react";
// import Inputs from "./Inputs";

const Row = ({ item_name, price, bought, editing }) => (
	<>
		{/* <td className="tdNarrow"><button className="tableButtons deleteButton" /></td>

		<td className="tdNarrow"><button className={!editing ? "tableButtons editButton" : "button saveButton"}></button></td> */}

		<td className="tableInputs">{item_name}</td>

		<td className="tableInputs">{`£${price}`}</td>

		<td className="tableInputs">
			<div className="buttonCentre">
				<button
					className={bought ? "button tickButton" : "button crossButton"}
				/>
			</div>
		</td>
	</>
);

export default Row;
