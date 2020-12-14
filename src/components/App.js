import Friend from "./Friend";
import Row from "./Row";
import Gift from "./Gift";
const App = () => (
	<>
		<nav>
			<h1>Gift Tracker App</h1>
		</nav>

		<Friend friendName={"bob"} />

		<h2>"Budget Here"</h2>

		<table>
			<thead>
				<tr>
					<th></th>
					<th></th>
					<th>Description</th>
					<th>Price</th>
					<th>Bought?</th>
				</tr>
			</thead>

			{/* Stick a row component here */}
			<Gift />
			<tfoot>
				<tr>
					<td>Total Goes Here</td>
				</tr>
			</tfoot>
		</table>
	</>
);

export default App;
