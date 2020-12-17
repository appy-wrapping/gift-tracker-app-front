import Friend from "../Friend";
import Add from "../Add";
import { Component } from "react";
import Total from '../Total/Total';

import Gift from "../Gift";

// const App = ({ gifts }) => (
class App extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getGifts();
	}

	render() {
		return (
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
								<th>
									<h3>Description</h3>
								</th>
								<th>
									<h3>Price</h3>
								</th>
								<th>
									<h3>Bought?</h3>
								</th>
							</tr>
						</thead>

						{/* Stick a row component here */}
						<tbody>
							{this.props.gifts.map((gift) => (
								<Gift gift={gift} key={gift.id} />
							))}
							<Add />
						</tbody>
					</table>
				</article>

				{/* <h2 className="footer">Total Goes Here</h2> */}
				<Total />
			</section>
		);
	}

	// );
}

export default App;
