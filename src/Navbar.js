import React, { Component } from "react";

export class Navbar extends Component {
	render() {
		return (
			<div className="bg-blue-500 text-white flex items-center px-2 py-1">
				<div className="logo">Logo</div>
				<div className="flex items-center px-2 py-1 space-x-8 ">
					<p className=" px-2 hover:bg-blue-400 rounded">
						workspace
						<button className="px-1">+</button>
					</p>
					<p>recent</p>
					<p>more</p>
				</div>
			</div>
		);
	}
}

export default Navbar;
