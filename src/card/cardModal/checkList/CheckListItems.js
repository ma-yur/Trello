import React, { Component } from "react";
import CheckListItem from "./CheckListItem";

export class CheckListItems extends Component {
	handleDeleteItem = (checkItemId) => {
		this.props.handleDeleteItem(checkItemId);
	};
	handleItemChange = (data) => {
		this.props.handleItemChange(data);
	};
	render() {
		let checkListItems = this.props.checkListItems.map((item) => {
			return (
				<CheckListItem
					key={item.id}
					itemName={item.name}
					checkListId={this.props.checkListId}
					checkItemId={item.id}
					handleDeleteItem={this.handleDeleteItem}
					state={item.state}
					cardId={this.props.cardId}
				/>
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
