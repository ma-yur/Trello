import React, { Component } from "react";

export class CardModal extends Component {
	handleClose = () => {
		this.props.handleClose();
	};
	render() {
		return (
			<div
				className=" bg-black bg-opacity-5 absolute inset-0 h-screen flex items-center justify-center "
				id="overlay"
			>
				<div className="bg-white  relative flex items-start justify-around w-5/12 h-3/4 py-10 px-5">
					<div>
						<h1 className="text-bold">{this.props.name}</h1>
						<p className="text-gray-500">
							in list
							<span className="italic underline ">{this.props.listName}</span>
						</p>
						<h1 className="text-bold my-4">Description</h1>
					</div>
					<div>
						<h1>Add to card</h1>
						<p className="bg-green-500">checklist</p>
					</div>
					<button
						onClick={this.handleClose}
						className="absolute top-0 right-0 p-10"
					>
						x
					</button>
				</div>
			</div>
		);
	}
}

export default CardModal;
