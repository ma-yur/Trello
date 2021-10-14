import React, { Component } from "react";

import { Route } from "react-router";


import Navbar from "./Navbar";
import Workspace from "./Workspace";

import BoardList from "./BoardLists";

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = { boardId: "", isClicked: false };
	}

	getBoardId = (id) => {
		this.setState({ boardId: id, isClicked: true });
	};

  componentDidMount=()=>{

  }
	
  
	render() {

		return (
			<div>
				<Navbar />
				<Workspace handleClick={this.getBoardId} />
				
				{(this.state.isClicked)&& <BoardList boardId={this.state.boardId}/> }
			</div>
		);
	}
}

export default App;
