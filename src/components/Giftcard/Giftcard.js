import { Component } from "react";

import Row from "../Row";
import Editing from "../Editing";

class Giftcard extends Component {
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

	// componentDidMount() {
	// 	this.props.getGifts();
	// }

	handleGiftName(e) {
		this.setState({ item_name: e.currentTarget.value });
	}

	handlePrice(e) {
		this.setState({ price: e.currentTarget.value });
	}

	handleBought() {
		this.setState({ bought: !this.state.bought });
	}

	handleEditing() {
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

	handleDelete() {
		this.props.deleteGift(this.props.gift.id);
	}

	render() {
		let { item_name, price, bought } = this.state;

		return (
			<article className="giftcard">
				<header className="giftcardHeader">
					<h2>Bought?</h2>
					<button
						className={bought ? "button tickButton" : "button crossButton"}
					/>
				</header>

				<h2 className="giftcard">Description</h2>
				{ this.state.editing
					? <input onChange={this.handleGiftName} value={item_name} className="giftcardText" />
					: <p className="giftcardText">{item_name}</p>
				}

				<h2 className="giftcard">Price</h2>
				{ this.state.editing
					? <input onChange={this.handlePrice} value={price} className="giftcardText" />
					: <p className="giftcardText">{`£${price}`}</p>
				}

				<footer className="giftcardFooter">
					<button
						className="button deleteButton"
						onClick={this.handleDelete}
					/>

					<button
						onClick={this.handleEditing}
						className={
							!this.state.editing
								? "button editButton"
								: "button saveButton"
						}
					/>
				</footer>
			</article>
		);
	}
}

export default Giftcard;
