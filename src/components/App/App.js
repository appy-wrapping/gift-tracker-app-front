import Friend from "../Friend";
import Add from "../Add";
import { Component } from "react";
import Total from '../Total';
import Giftcard from "../Giftcard";
import Gift from "../Gift";

// const App = ({ gifts }) => (
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobileView: window.innerWidth < 768,
		}
	}
	componentDidMount() {
		this.props.getGifts();
		window.addEventListener("resize", () => {
			this.setState({ mobileView: window.innerWidth < 768 })
		})
	}

	render() {
		return (
			<section>
				<nav>
					<h1 className="header">Gift Tracker</h1>
				</nav>

				<div className="introText">
					<p>Add a friend</p>
					<div class="arrow" />
					<p>Set your budget</p>
					<div class="arrow" />
					<p>Track your gift spending</p>
				</div>

				<div className="cardHolder">
					<Friend friendName={"bob"} />

					<div className="budgetHolder">
						<h2 className="card budgetCard">Budget: £0.00</h2>
						<button className="button editButtonTwo" />
					</div>
				</div>

				{ this.state.mobileView ?
					<div>

						{this.props.gifts.map((gift) => (
							<Giftcard gift={gift} key={gift.id} />
						))}
						<Add />


					</div>
					:
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
				}

				{/* <h2 className="footer">Total Goes Here</h2> */}
				<Total />
			</section>
		);
	}

	// );
}

export default App;
