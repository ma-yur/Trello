import React, { Component } from "react";

export class AddCheckListItems extends Component {
	constructor(props) {
		super(props);
		this.state = { itemName: "", isEditing: false };
	}

	handleClose = () => {
		this.setState({ isEditing: false });
	};
	handleOpen = () => {
		this.setState({ isEditing: true });
	};
	updateData = (name) => {
		fetch(
			`https://api.trello.com/1/checklists/${this.props.checkListId}/checkItems?name=${name}&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
			{
				method: "POST",
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => this.props.addItem(data))
			.catch((err) => console.error(err));
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.updateData(this.state.itemName);
		this.setState({ itemName: "" });
		this.setState({ isEditing: false });
	};
	render() {
		let AddItem = (
			<div>
				<button
					onClick={this.handleOpen}
					className="bg-gray-200 text-gray-400 ml-3 p-1 rounded"
				>
					Add Item
				</button>
			</div>
		);
		let AddItemForm = (
			<div className="bg-gray-300 p-2 absolute">
				<form onSubmit={this.handleSubmit} action="">
					<input
						className="p-1 rounded"
						type="text"
						value={this.state.itemName}
						onChange={(e) => {
							this.setState({ itemName: e.target.value });
						}}
					/>
					<div className=" mt-3 flex gap-3">
						<button className="bg-blue-500 text-blue-200 px-2 rounded my-2 ">
							Add Items
						</button>
						<button className="text-gray-600" onClick={this.handleClose}>
							X
						</button>
					</div>
				</form>
			</div>
		);

		if (this.state.isEditing) return AddItemForm;
		else return AddItem;
	}
}

export default AddCheckListItems;
