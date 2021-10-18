import React, { Component } from "react";
import Cross from "../../../Cross";

export class CheckListItem extends Component {
	render() {
		return (
			<div className="mx-6 text-gray-700 hover:bg-gray-200 block w-1/2 rounded px-2 my-1 flex justify-between ">
				<div className=" ">
					+ {this.props.itemName}
				</div>
				<div onClick={this.handleDelete}>
					<Cross />
				</div>
			</div>
		);
	}
}

export default CheckListItem;
