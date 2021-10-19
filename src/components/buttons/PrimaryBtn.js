import React, { Component } from "react";

export class PrimaryBtn extends Component {
	render() {
		return (
			<div>
				<button className="bg-sky-700 text-blue-50 hover:bg-sky-800 rounded px-4 py-1 ">
					{this.props.title}
				</button>
			</div>
		);
	}
}

export default PrimaryBtn;
