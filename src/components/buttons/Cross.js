import React, { Component } from "react";

export class Cross extends Component {
	render() {
		return (
			<button
				className={`px-2 text-${this.props.size} text-gray-500 rounded-full hover:text-gray-600`}
			>
				{" "}
				x
			</button>
		);
	}
}

export default Cross;
