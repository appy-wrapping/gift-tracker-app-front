const Inputs = ({ handleChange, value, type, bought, placeholder }) => (

	type === "text" ?
		<td className="tableInputs">
			<input
				className="tableTextInput"
				type="text"
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
			/>
		</td>
		:
		<td className="tableInputs">
			<div className="buttonCentre">
				<button
					className={bought ? "button tickButton" : "button crossButton"}
					onClick={handleChange}
					placeholder={placeholder}
				/>
			</div>
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
