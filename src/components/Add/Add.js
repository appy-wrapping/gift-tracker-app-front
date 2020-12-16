// import react from "react";
import Inputs from "../Inputs";
import { Component } from "react";

class Add extends Component {
	constructor(props) {
		super(props);

		this.state = {
			item_name: "",
			price: 0,
		};
		this.handleAdd = this.handleAdd.bind(this);
		this.handleGiftName = this.handleGiftName.bind(this);
		this.handlePrice = this.handlePrice.bind(this);
	}

	handleGiftName(e) {
		this.setState({ item_name: e.currentTarget.value });
	}

	handlePrice(e) {
		this.setState({ price: e.currentTarget.value });
	}

	handleAdd(e) {
		this.props.addGift({
			item_name: this.state.item_name,
			price: this.state.price,
		});
		this.setState({ item_name: "", price: 0 });
	}
	render() {
		let { item_name, price, bought } = this.state;
		return (
			<>
				<tr>
					<td></td>
					<td>
						<button onClick={this.handleAdd}>+</button>
					</td>

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
				</tr>
			</>
		);
	}
}

export default Add;
