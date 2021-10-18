import React, { Component } from "react";
import Cross from "../../../Cross";

export class CheckListItem extends Component {
	deleteItem = () => {
		fetch(
			`https://api.trello.com/1/checklists/${this.props.checkListId}/checkItems/${this.props.checkItemId}?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
			{
				method: "DELETE",
			}
		).catch((err) => console.error(err));
	};

	handleDelete = () => {
		this.deleteItem();
		this.props.handleDeleteItem(this.props.checkItemId);
	};

	render() {
		return (
			<div className="mx-6 text-gray-700 hover:bg-gray-200 block w-1/2 rounded px-2 my-1 flex justify-between ">
				<div className=" ">+ {this.props.itemName}</div>
				<div onClick={this.handleDelete}>
					<Cross />
				</div>
			</div>
		);
	}
}

export default CheckListItem;
