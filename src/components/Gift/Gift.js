import { Component } from "react";

import Row from "../Row";
import Editing from "../Editing";
import Inputs from "../Inputs";

class Gift extends Component {
	constructor(props) {
		super(props);

		this.state = {
			item_name: this.props.gift.item_name,
			price: this.props.gift.price,
			bought: this.props.gift.bought,
			editing: false,
		};
		this.handleGiftName = this.handleGiftName.bind(this);
		this.handlePrice = this.handlePrice.bind(this);
		this.handleBought = this.handleBought.bind(this);
		this.handleEditing = this.handleEditing.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidMount() {
		this.props.getGifts();
	}

	handleGiftName(e) {
		this.setState({ item_name: e.currentTarget.value });
	}

	handlePrice(e) {
		this.setState({ price: e.currentTarget.value });
	}

	handleBought(e) {
		this.setState({ bought: !this.state.bought });
	}

	handleEditing(e) {
		if (this.state.editing) {
			this.props.editGift({
				id: this.props.gift.id,
				item_name: this.state.item_name,
				price: this.state.price,
				bought: this.state.bought,
			});
		}

		this.setState({ editing: !this.state.editing });
	}

	handleDelete(e) {
		this.props.deleteGift(this.props.gift.id);
	}

	render() {
		let { item_name, price, bought } = this.state;

		return (
			<>
				<tr>
					{" "}
					<td>
						<button onClick={this.handleDelete}>X</button>
					</td>
					<td>
						<button onClick={this.handleEditing}>/</button>
					</td>
					{this.state.editing ? (
						<Editing
							item_name={item_name}
							price={price}
							bought={bought}
							handleGiftName={this.handleGiftName}
							handlePrice={this.handlePrice}
							handleBought={this.handleBought}
						/>
					) : (
						<Row item_name={item_name} price={price} bought={bought} />
					)}
				</tr>
			</>
		);
	}
}

export default Gift;
