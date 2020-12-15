import Friend from "../Friend";

import Gift from "../Gift/Gift";

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
					<th><h2>Description</h2></th>
					<th><h2>Price</h2></th>
					<th><h2>Bought?</h2></th>
				</tr>
			</thead>

			{/* Stick a row component here */}
			<tbody>
				{
					gifts.map((gift, i) => <Gift gift={gift} key={i} />)
				}
			</tbody>

			<tfoot>
				<tr>
					<td><h2>Total Goes Here</h2></td>
				</tr>
			</tfoot>
		</table>
	</>
);

export default App;
