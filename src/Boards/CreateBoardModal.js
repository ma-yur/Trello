import React, { Component } from "react";

export class CreateBoardModal extends Component {
	constructor(props) {
		super(props);
		this.state = { boardName: "" };
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleSubmit(this.state.boardName);
		this.props.closeModal();
	};

	closeModal = () => {
		this.props.closeModal();
	};
	render() {
		return (
			<div className=" bg-black bg-opacity-70 absolute  top-0 h-1/5 w-1/5 flex  ">
				<form
					onSubmit={this.handleSubmit}
					action=""
					className="flex flex-wrap items-center justify-around"
				>
					<input
						className="p-1 w-8/12 "
						type="text"
						name=""
						id=""
						value={this.state.boardName}
						onChange={(e) => {
							this.setState({ boardName: e.target.value });
						}}
						placeholder="Enter board name...."
					/>
					<button className="bg-blue-500 p-1 text-white my-3">
						Create board
					</button>
				</form>

				<button
					onClick={this.closeModal}
					className="absolute top-0 right-0 p-10 text-white"
				>
					x
				</button>
			</div>
		);
	}
}

export default CreateBoardModal;
