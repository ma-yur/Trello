import React, { Component } from "react";

import AllBoards from "./AllBoards";

export class Workspace extends Component {
	// handleClick = (id) => {
	// 	this.props.handleClick(id);
	// };
	render() {
		return (
			<div className="grid grid-cols-4 container mx-auto p-4 my-3  h-96">
				<div className="bg-green-500">right</div>

				<AllBoards />
			</div>
		);
	}
}

export default Workspace;
