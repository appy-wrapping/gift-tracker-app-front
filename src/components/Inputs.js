// import Gift from "./Gift";
const Inputs = ({ handleChange, value, type, checkbox }) => (

	<td>
		{!checkbox ?
			<input
				className="tableTextInput"
				type="text"
				value={value}
				onChange={handleChange} /> :
			<input
				className="tableCheckbox"
				type="checkbox"
				onChange={handleChange}
			/>}
	</td>


);
export default Inputs;
