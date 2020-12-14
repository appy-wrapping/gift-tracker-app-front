const Inputs = ({ handleChange, handleBought, value, type, checkbox }) => (
	<tbody>
		<tr>
			<td>icon1</td>
			<td>icon2</td>
			<input type={type} value={value} onChange={handleChange} />
			<input type={type} value={value} onChange={handleChange} />
			<input type={checkbox} value={value} onClick={handleBought} />
		</tr>
	</tbody>
);
export default Inputs;
