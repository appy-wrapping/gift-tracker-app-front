const Inputs = ({ handleChange, value, type, bought }) => (

	type === "text" ?
		<td>
			<input
				className="tableTextInput"
				type="text"
				value={value}
				onChange={handleChange}
			/>
		</td>
		:
		<td className="tableInputs">
			<button
				className={bought ? "button tickButton" : "button crossButton"}
				onChange={handleChange}
			/>
		</td>


	// {/* {!checkbox ?
	// 	<input
	// 		className="tableTextInput"
	// 		type="text"
	// 		value={value}
	// 		onChange={handleChange} /> :
	// 	<input
	// 		className="tableCheckbox"
	// 		type="checkbox"
	// 		onChange={handleChange}
	// 	/>} */}



);
export default Inputs;
