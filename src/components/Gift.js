import { Component } from "react";
import Inputs from "./Inputs";

class Gift extends Component {
	constructor(props) {
		super(props);

		this.state = {
			item_name: "Your gift here",
			price: 0.0,
			bought: false,
		};
		this.handleGiftName = this.handleGiftName.bind(this);
		this.handlePrice = this.handlePrice.bind(this);
		this.handleBought = this.handleBought.bind(this);
	}
	handleGiftName(e) {
		this.setState({ item_name: e.currentTarget.value });
	}

	handlePrice(e) {
		this.setState({ price: e.currentTarget.value });
	}

	handleBought(e) {
		this.setState({ bought: e.currentTarget.checked });
	}

	render() {
		let { item_name, price, bought } = this.state;

		return (
			<tbody>
				<tr>
					<Inputs
						label="Gift Name"
						value={item_name}
						checkbox={false}
						handleChange={this.handleGiftName}
					/>
					<Inputs
						label="Price"
						value={price}
						checkbox={false}
						handleChange={this.handlePrice}
					/>
					<Inputs
						label="Bought"
						checkbox={true}
						handleChange={this.handleBought}
					/>
				</tr>
			</tbody>
		);
	}
}

export default Gift;
