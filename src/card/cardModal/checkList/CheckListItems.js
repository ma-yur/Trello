import React, { Component } from "react";
import CheckListItem from "./CheckListItem";

export class CheckListItems extends Component {
	handleDeleteItem = (checkItemId) => {
		this.props.handleDeleteItem(checkItemId);
	};
	render() {
		let checkListItems = this.props.checkListItems.map((item) => {
			return (
				<>
					<CheckListItem
						key={item.id}
						itemName={item.name}
						checkListId={this.props.checkListId}
						checkItemId={item.id}
						handleDeleteItem={this.handleDeleteItem}
					/>
				</>
			);
		});
		return (
			<>
				<div>{checkListItems}</div>
			</>
		);
	}
}

export default CheckListItems;
