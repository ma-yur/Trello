import React, { Component } from "react";

import AllBoards from "./Boards/AllBoards";

export class Workspace extends Component {
	render() {
		return (
			<div className="flex items-center justify-center w-90 mx-auto p-5 my-3   h-full">
				<AllBoards />
			</div> 
		);
	}
}

export default Workspace;
