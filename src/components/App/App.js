import Friend from "../Friend";
import Add from "../Add";

import Gift from "../Gift";

const App = ({ gifts }) => (
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
			<tbody>
				{gifts.map((gift) => (
					<Gift gift={gift} key={gift.id} />
				))}
				<Add />
			</tbody>

			<tfoot>
				<tr>
					<td>Total Goes Here</td>
				</tr>
			</tfoot>
		</table>
	</>
);

export default App;
