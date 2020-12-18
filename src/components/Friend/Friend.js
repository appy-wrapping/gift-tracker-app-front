import { Component } from "react";

class Friend extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name: this.props.name,
			editingName: false,
			editingBudget: false,
			budget: this.props.budget,
			id: this.props.id
		};

		this.handleName = this.handleName.bind(this);
		this.handleBudget = this.handleBudget.bind(this);
		this.handleEditingName = this.handleEditingName.bind(this);
		this.handleEditingBudget= this.handleEditingBudget.bind(this)
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
				budget: this.state.budget
			});
		}

		this.setState({ editingName: !this.state.editingName });
	}

	handleEditingBudget() {

		if (this.state.editingBudget) {
			this.props.editFriend({
				id: this.props.id,
				name: this.state.name,
				budget: this.state.budget
			});
		}

		this.setState({ editingBudget: !this.state.editingBudget });
	}


	render() {
		let { name, budget } = this.state;

		return (
			<>
			{this.state.editingName ?
			//something
				<>
					<input onChange={ this.handleName } className="card friendCard" placeholder={ name } />
					<button id="pencil" onClick = {this.handleEditingName}></button>
				</>
				
				:
				//soemthing else
				<>
					<h2 className="card friendCard">{ name }</h2>
					<button id="pencil" onClick = {this.handleEditingName}></button>
				</>
				}

				{this.state.editingBudget ?
				<>
					<input type="number" onChange={ this.handleBudget } className="card budgetCard" value={`${budget}`}></input>
					<button id="pencil" onClick = {this.handleEditingBudget}></button>
				</>	
				:
				<>
					<h2 className="card budgetCard">£{ budget}</h2>
					<button id="pencil" onClick = {this.handleEditingBudget}></button>
				</>
				}
			</>

		);
	}
}

export default Friend;
