import { Component } from "react";
import Inputs from "../Inputs";
import Row from "../Row";
import Editing from "../Editing";

class Gift extends Component {
	constructor(props) {
		super(props);

		this.state = {
			item_name: props.item_name,
			price: 0.0, //edit
			bought: false, //edit
			editing: false,
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
			<tr>
				{this.state.editing ?
					<Editing
						item_name={item_name}
						price={price}
						bought={bought}
						handleGiftName={this.handleGiftName}
						handlePrice={this.handlePrice}
						handleBought={this.handleBought}
					/>
					:
					<Row
						item_name={item_name}
						price={price}
						bought={false}
					/>
				}

			</tr>

		);
	}
}

export default Gift;
