import React, { Component } from "react";

export class Board extends Component {
	handleClick = () => {
		this.props.handleClick(this.props.id);
	};

	render() {
		const { name, prefs } = this.props;
		let backgroundColor = prefs.backgroundImage ? "red" : prefs.background;
		return (
			<div
				style={{ backgroundColor: backgroundColor }}
				className=" cursor-pointer p-3 w-1/5 m-1 h-20 text-white"
				onClick={this.handleClick}
			>
				{name}
			</div>
		);
	}
}

export default Board;
