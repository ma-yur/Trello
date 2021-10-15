import React, { Component } from "react";

import { Route, Switch } from "react-router";

import Navbar from "./Navbar";
import Workspace from "./Workspace";

import BoardList from "./BoardLists";

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = { boardId: "", isClicked: false };
	}

	render() {
		return (
			<div>
				<Navbar />

				<Switch>
					<Route exact path="/" component={() => <Workspace />} />

					<Route
						exact
						path="/:id"
						component={(routeProps) => (
							<BoardList boardId={routeProps.match.params.id} />
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
