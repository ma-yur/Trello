import React, { Component } from "react";

export class AddList extends Component {
	constructor(props) {
		super(props);
		this.state = { isEditing: true, listName: "" };
	}
	handleEdit = () => {
		this.setState({ isEditing: true });
	};
	handleCloseEdit = () => {
		this.setState({ isEditing: false });
	};
	updateList = () => {
		fetch(
			`https://api.trello.com/1/lists?name=${this.state.listName}&pos=bottom&idBoard=${this.props.boardId}&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
			{
				method: "POST",
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => this.props.handleAddList(data))
			.catch((err) => console.error(err));
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.updateList();
		this.setState({ listName: "" });
	};
	render() {
		if (this.state.isEditing) {
			return (
				<form
					onSubmit={this.handleSubmit}
					className="bg-gray-300 w-72 m-5 pl-4 p-3"
					action=""
				>
					<input
						className="inline-block h-8 p-2"
						type="text"
						placeholder="Add a new list "
						value={this.state.listName}
						onChange={(e) => this.setState({ listName: e.target.value })}
					/>
					<div className="flex items-center gap-5 ">
						<button className="bg-blue-500 px-4 py-1 mt-2 rounded-md ">
							Add
						</button>
						<p
							onClick={this.handleCloseEdit}
							className="text-gray-500 cursor-pointer text-xl p-1 flex "
						>
							X
						</p>
					</div>
				</form>
			);
		} else {
			return (
				<div
					onClick={this.handleEdit}
					className="bg-black hover:bg-gray-300 cursor-pointer bg-opacity-5 text-gray-500 shadow  w-72 m-5 pl-4 p-3 "
				>
					+ add list
				</div>
			);
		}
	}
}

export default AddList;
