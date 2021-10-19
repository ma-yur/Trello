import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Board extends Component {
	render() {
		const { name, prefs } = this.props;
		let background = prefs.backgroundImage
			? `url(${prefs.backgroundImageScaled[2].url})`
			: prefs.backgroundColor;
		return (
			<Link
				className=" h-32 w-1/5  cursor-pointer p-3  text-white"
				to={`/${this.props.id}`}
				style={{ background: `${background} no-repeat center ` }}
			>
				<p className="font-bold">{name}</p>
			</Link>
		);
	}
}

export default Board;

