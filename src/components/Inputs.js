import Gift from "./Gift";
const Inputs = ({ handleChange, value, type, checkbox }) => (

	<td>
		{!checkbox ?
			<input
				type="text"
				value={value}
				onChange={handleChange} /> :
			<input
				type="checkbox"
				onChange={handleChange}
			/>}
	</td>


);
export default Inputs;
