import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
	render() {
		return (
			<div className="bg-sky-600 text-white flex items-center px-2 py-1 ">
				<Link to="/"  className=" flex items-center gap-2 ml-7">
					<img
						src="https://cdn-icons.flaticon.com/png/128/1313/premium/1313613.png?token=exp=1634557304~hmac=b5e9ba2766f75a1b95e7851faf521d44"
						alt=""
						width="20px"
					/>
					<p className="text-xl font-bold">Trello</p>
				</Link>
				<div className="flex items-center px-2 py-1 space-x-8 ">
					<p className=" px-2 hover:bg-blue-400 rounded">workspace</p>
					<p>recent</p>
					<p>more</p>
				</div>
			</div>
		);
	}
}

export default Navbar;
