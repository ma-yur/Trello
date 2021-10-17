import React, { Component } from "react";

import Board from "../Board";
import CreateBoard from "./CreateBoard";

export class AllBoards extends Component {
	constructor(props) {
		super(props);
		this.state = { boards: [] };
	}
	updateData = () => {
		console.log("board data fetched");
		fetch(
			"https://api.trello.com/1/members/me/boards?fields=name,url,prefs&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6",
			{
				method: "GET",
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => this.setState({ boards: data }))
			.catch((err) => console.error(err));
	};

	componentDidMount = () => {
		this.updateData();
	};

	boardAdded = (data) => {
		this.setState({ boards: [...this.state.boards, data] });
	};

	render() {
		let boards = this.state.boards.map((board) => {
			return <Board key={board.id} {...board} />;
		});

		return (
			<div className=" col-span-3  flex-column items-start px-4 ">
				<h1>Your work space boards</h1>
				<div className="flex flex-wrap">{boards}</div>

				<CreateBoard boardAdded={this.boardAdded} />
			</div>
		);
	}
}

export default AllBoards;
