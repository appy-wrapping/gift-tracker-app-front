import Friend from "../Friend";

import Gift from "../Gift/Gift";

const App = ({ gifts }) => (
	<section>
		<nav>
			<h1 className="header">Gift Tracker App</h1>
		</nav>

		<div className="cardHolder">
			<Friend friendName={"bob"} />

			<h2 className="card budgetCard">"Budget Here"</h2>
		</div>

		<table>
			<thead>
				<tr>
					<th></th>
					<th></th>
					<th><h3>Description</h3></th>
					<th><h3>Price</h3></th>
					<th><h3>Bought?</h3></th>
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
	</section>
);

export default App;
