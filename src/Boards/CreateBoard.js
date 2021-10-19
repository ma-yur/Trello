import React, { Component } from "react";

import CreateBoardModal from "./CreateBoardModal";

import { createBoard } from "../apis/boardApis";

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

	updateBoard = async (name) => {
		let boardData = await createBoard(name);
		this.props.onBoardAdd(boardData);
	};

	handleSubmit = (name) => {
		this.updateBoard(name);
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

				{this.state.openModal && (
					<CreateBoardModal
						closeModal={this.closeModal}
						OnSubmit={this.handleSubmit}
					/>
				)}
			</>
		);
	}
}

export default CreateBoard;
