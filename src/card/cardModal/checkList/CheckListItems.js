import React, { Component } from "react";
import AddCheckListItems from "./AddCheckListItems";
import CheckListItem from "./CheckListItem";

export class CheckListItems extends Component {
	render() {
		let checkListItems = this.props.checkListItems.map((item) => {
			return (
				<>
					<CheckListItem key={item.id} itemName={item.name} />
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
