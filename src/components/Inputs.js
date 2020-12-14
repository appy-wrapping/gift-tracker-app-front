import Gift from "./Gift";
const Inputs = ({ handleChange, handleBought, value, type, checkbox }) => (
	<tbody>
		<tr>
			<td>icon1</td>
			<td>icon2</td>
			<td>
				<input type={type} value={value} onChange={handleChange} />
			</td>
			<td>
				<input type={type} value={value} onChange={handleChange} />
			</td>
			<td>
				<input type="checkbox" value={value} onClick={handleBought} />
			</td>
		</tr>
	</tbody>
);
export default Inputs;
