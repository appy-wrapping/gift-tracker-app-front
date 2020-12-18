import { Component } from "react";

class Friend extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: this.props.name,
			editingName: false,
			editingBudget: false,
			budget: this.props.budget,
			id: this.props.id,
		};

		this.handleName = this.handleName.bind(this);
		this.handleBudget = this.handleBudget.bind(this);
		this.handleEditingName = this.handleEditingName.bind(this);
		this.handleEditingBudget = this.handleEditingBudget.bind(this);
	}

	handleName(e) {
		this.setState({ name: e.currentTarget.value });
	}

	handleBudget(e) {
		this.setState({ budget: e.currentTarget.value });
	}

	handleEditingName() {
		if (this.state.editingName) {
			this.props.editFriend({
				id: this.props.id,
				name: this.state.name,
				budget: this.state.budget,
			});
		}

		this.setState({ editingName: !this.state.editingName });
	}

	handleEditingBudget() {
		if (this.state.editingBudget) {
			this.props.editFriend({
				id: this.props.id,
				name: this.state.name,
				budget: this.state.budget,
			});
		}

		this.setState({ editingBudget: !this.state.editingBudget });
	}

	render() {
		let { name } = this.state;

		return (
			<>
				{this.state.editingName ? (
					//something
					<div className="friendHolder">
						<input onChange={this.handleName} className="card friendCard editing" placeholder={name} />
						<button className={!this.state.editingName ? "button editButtonTwo" : "button saveButtonTwo"} id="pencil" onClick={this.handleEditingName}></button>
					</div>
				) : (
						//soemthing else
						<div className="friendHolder">
							<h2 className="card friendCard">{name}</h2>
							<button
								className="button editButtonTwo"
								id="pencil"
								onClick={this.handleEditingName}
							></button>
						</div>
					)}
			</>
		);
	}
}

export default Friend;
