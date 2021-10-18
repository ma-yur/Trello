import React, { Component } from "react";
import Cross from "../../../Cross";

export class CheckListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkState: this.props.state,
		};
	}
	deleteItem = () => {
		fetch(
			`https://api.trello.com/1/checklists/${this.props.checkListId}/checkItems/${this.props.checkItemId}?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
			{
				method: "DELETE",
			}
		).catch((err) => console.error(err));
	};
	updateItem = (cardId, checkItemId, state) => {
		fetch(
			`https://api.trello.com/1/cards/${cardId}/checkItem/${checkItemId}?state=${state}&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
			{
				method: "PUT",
			}
		).catch((err) => console.error(err));
	};

	handleDelete = () => {
		this.deleteItem();
		this.props.handleDeleteItem(this.props.checkItemId);
	};
	handleCheckBox = (e) => {
		this.setState(
			{
				checkState:
					this.state.checkState === "complete" ? "incomplete" : "complete",
			},
			() => {
				this.updateItem(
					this.props.cardId,
					this.props.checkItemId,
					this.state.checkState
				);
			}
		);
	};

	render() {

		return (
			<div className="mx-6 text-gray-700 hover:bg-gray-200 block w-1/2 rounded px-2 my-1 flex justify-between ">
				<label className="inline-flex items-center">
					<input
						type="checkbox"
						className="form-checkbox"
						checked={this.state.checkState === "complete" ? true : false}
						onChange={this.handleCheckBox}
					/>
					<span className="ml-2">{this.props.itemName}</span>
				</label>
				<div onClick={this.handleDelete}>
					<Cross />
				</div>
			</div>
		);
	}
}

export default CheckListItem;
