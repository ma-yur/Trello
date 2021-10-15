import React, { Component } from "react";

export class CreateBoard extends Component {
	constructor(props) {
		super(props);
		this.state = { openModal: true };
	}

	openModal = () => {
		this.setState({ openModal: true });
	};

	closeModal = () => {
		this.setState({ openModal: false });
	};

	handleSubmit = (e) =>{
		e.preventDefault()
		
	}

	render() {
		return (
			<>
				<div
					onClick={this.openModal}
					className=" bg-gray-300 h-20 w-1/5 inline-block cursor-pointer p-3  m-1 flex items-center justify-center text-gray-400"
				>
					create new board
				</div>

				{/* create board modal */}
				{this.state.openModal && (
					<div className=" bg-black bg-opacity-70 absolute  top-0 h-1/5 w-1/5 flex  ">
						<form
						onSubmit = {this.handleSubmit}
							action=""
							className="flex flex-wrap items-center justify-around"
						>
							<input
								className="p-1 w-8/12 "
								type="text"
								name=""
								id=""
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
				)}
			</>
		);
	}
}

export default CreateBoard;
