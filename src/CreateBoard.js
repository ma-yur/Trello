import React, { Component } from "react";

import CreateBoardModal from "./CreateBoardModal";

export class CreateBoard extends Component {
	constructor(props) {
		super(props);
		this.state = { openModal: false };
	}

	openModal = () => {
		this.setState({ openModal: true });
	};

	closeModal = () => {
		this.setState({ openModal: false });
	};
	createBoard = (name) => {
		fetch(
			`https://api.trello.com/1/boards/?name=${name}&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
			{
				method: "POST",
			}
		)
			.then((response) => {
				console.log(`Response: ${response.status} ${response.statusText}`);
				return response.text();
			})
			.catch((err) => console.error(err));
	};

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
					<CreateBoardModal
						closeModal={this.closeModal}
						handleSubmit={this.createBoard}
					/>
				)}
			</>
		);
	}
}

export default CreateBoard;
