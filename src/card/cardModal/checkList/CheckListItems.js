import React, { Component } from "react";
import CheckListItem from "./CheckListItem";
import Cross from "../../../Cross";

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
