import React, { Component } from "react";

import PrimaryBtn from "../components/buttons/PrimaryBtn";
import Cross from "../components/buttons/Cross";

import { addList } from "../apis/listApis";

export class AddList extends Component {
	constructor(props) {
		super(props);
		this.state = { isEditing: false, listName: "" };
	}
	handleEdit = () => {
		this.setState({ isEditing: true });
	};
	handleCloseEdit = () => {
		this.setState({ isEditing: false });
	};

	newList = async (listName, boardId) => {
		let newListData = await addList(listName, boardId);
		this.props.handleAddList(newListData);
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.newList(this.state.listName, this.props.boardId);

		this.setState({ listName: "" });
	};
	render() {
		if (this.state.isEditing) {
			return (
				<form
					onSubmit={this.handleSubmit}
					className="bg-gray-200 w-72 m-5 pl-4 p-3 rounded"
					action=""
				>
					<input
						className="inline-block h-8 p-2 rounded-md"
						type="text"
						placeholder="Enter list title"
						value={this.state.listName}
						onChange={(e) => this.setState({ listName: e.target.value })}
					/>
					<div className="flex items-center gap-5 my-2">
						<PrimaryBtn title={"Add List"} />
						<div onClick={this.handleCloseEdit}>
							<Cross size="2xl" />
						</div>
					</div>
				</form>
			);
		} else {
			return (
				<div
					onClick={this.handleEdit}
					className=" bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-25 bg-white cursor-pointer rounded-md  text-gray-500 shadow  w-72 m-5 pl-4 p-2 "
				>
					+ Add another list
				</div>
			);
		}
	}
}

export default AddList;
