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

		<article className="table">
			<table>
				<thead>
					<tr>
						<th className="tdNarrow"></th>
						<th className="tdNarrow"></th>
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


			</table>
		</article>

		<h2 className="footer">Total Goes Here</h2>

	</section>
);

export default App;
