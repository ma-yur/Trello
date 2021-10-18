import React, { Component } from "react";
import List from "./List";
import AddList from "./AddList";

export class BoardLists extends Component {
	constructor(props) {
		super(props);

		this.state = { lists: [], loading: true };
	}
	UpdateData = () => {
		fetch(
			`https://api.trello.com/1/boards/${this.props.boardId}/lists?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
			{
				method: "GET",
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({ lists: data, loading: false });
			})
			.catch((err) => console.error(err));
	};

	componentDidMount = () => {
		this.UpdateData();
	};
	componentDidUpdate = (prev) => {
		if (prev.boardId !== this.props.boardId) {
			this.UpdateData();
		}
	};
	addList = (newListData) => {
		this.setState({ lists: [...this.state.lists, newListData] });
	};
	deleteList = (id) => {
		this.setState({
			lists: this.state.lists.filter((list) => {
				return list.id !== id;
			}),
		});
	};

	render() {
		let lists = this.state.lists.map((list) => {
			return (
				<List
					key={list.id}
					let
					list={list}
					handleDeleteList={this.deleteList}
				/>
			);
		});
		if (!this.state.loading)
			return (
				<div className="flex items-start">
					<div className="flex items-start">{lists}</div>
					<AddList boardId={this.props.boardId} handleAddList={this.addList} />
				</div>
			);
		else {
			return <div>Loading.....</div>;
		}
	}
}

export default BoardLists;
