import React, { Component } from "react";

import Board from "./Board";
import CreateBoard from "./CreateBoard";

import { getBoards } from "../apis/boardApis";

export class AllBoards extends Component {
	constructor(props) {
		super(props);
		this.state = { boards: [] };
	}

	getBoards = async () => {
		let boardsData = await getBoards();
		this.setState({ boards: boardsData });
	};

	componentDidMount = () => {
		this.getBoards();
	};

	handleBoardAdd = (data) => {
		this.setState({ boards: [...this.state.boards, data] });
	};

	render() {
		let boards = this.state.boards.map((board) => {
			return <Board key={board.id} {...board} />;
		});

		return (
			<div className="  flex-column items-center  w-full px-4 ">
				<h1 className="text-2xl text-gray-500 font-bold">
					Your work space boards
				</h1>
				<div className="flex flex-wrap my-5 gap-5">{boards}</div>

				<CreateBoard onBoardAdd={this.handleBoardAdd} />
			</div>
		);
	}
}

export default AllBoards;
