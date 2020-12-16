// import Gift from "./Gift";
const Inputs = ({ handleChange, value, type, checkbox }) => (
	<td>
		{!checkbox ? (
			<input type="text" value={value} onChange={handleChange} />
		) : (
			<button
				// type="checkbox"
				onClick={handleChange}
			>
				{" "}
			</button>
		)}
	</td>
);
export default Inputs;
