import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Board extends Component {
	render() {
		const { name, prefs } = this.props;
		let backgroundColor = prefs.backgroundImage ? "red" : prefs.background;
		return (
			<Link
				className=" h-20 w-1/5 inline-block cursor-pointer p-3  m-1  text-white"
				to={`/${this.props.id}`}
				style={{ backgroundColor: backgroundColor }}
			>
				{name}
			</Link>
		);
	}
}

export default Board;
