import { Component } from "react";
import Inputs from "./Inputs";

class Gift extends Component {
	constructor(props) {
		super(props);

		this.state = {
			item_name: "",
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
			<>
				<Inputs
					label="Gift Name"
					value={item_name}
					type="text"
					onChange={this.handleGiftName}
				/>
				<Inputs
					label="Price"
					value={price}
					type="text"
					onChange={this.handlePrice}
				/>
				<Inputs label="Bought" type="checkbox" onChange={this.handleBought} />
			</>
		);
	}
}

export default Gift;
