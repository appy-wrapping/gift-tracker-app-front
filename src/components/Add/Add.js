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

	handleAdd() {
		this.props.addGift({
			item_name: this.state.item_name,
			price: this.state.price,
		});
		this.setState({ item_name: "", price: 0 });
	}
	render() {
		let { item_name, price } = this.state;

		return (
			<>
				<tr>
					<td></td>
					<td>
						<button onClick={this.handleAdd} class="tableButton addButton" />
					</td>

					<Inputs
						label="Gift Name"
						value={item_name}
						placeholder="Your gift here"
						checkbox={false}
						handleChange={this.handleGiftName}
						type="text"
					/>
					<Inputs
						label="Price"
						value={price}
						placeholder="£0.00"
						checkbox={false}
						handleChange={this.handlePrice}
						type="text"
					/>

					<Inputs handleChange={this.handlePrice}	/>
				</tr>
			</>
		);
	}
}

export default Add;
