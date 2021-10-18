import React, { Component } from "react";

export class PrimaryBtn extends Component {
	render() {
		return (
			<div>
				<button className="bg-blue-400 text-blue-100 hover:bg-blue-500 rounded px-4 py-1 ">
					{this.props.title}
				</button>
			</div>
		);
	}
}

export default PrimaryBtn;
