import React, { Component } from "react";
import List from "./List";
import AddList from "./AddList";

import { getLists } from "../apis/listApis";

import { getBoard } from "../apis/boardApis";

export class BoardLists extends Component {
	constructor(props) {
		super(props);

		this.state = { lists: [], loading: true, background:"" };
	}

	getListData = async (boardId) => {
		let listsData = await getLists(boardId);
		this.setState({ lists: listsData, loading: false });
	};
	getBackgroundImage = async (boardId) => {
		let boardData = await getBoard(boardId);
		let prefs = boardData.prefs;
		let background = prefs.backgroundImage
			? `url(${prefs.backgroundImageScaled[5].url}) no-repeat center`
			: prefs.backgroundColor;
		return background;
	};

	componentDidMount = () => {
		this.getListData(this.props.boardId);
		// this.setState({ background: this.getBackgroundImage(this.props.boardId).then((data)=>data) });
		this.getBackgroundImage(this.props.boardId).then((background)=>{
			this.setState({ background:background})
			
			})
		
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
				<div style={{background:this.state.background}} className="h-screen">
					<div className="flex  items-start">
						<div className="flex items-start">{lists}</div>
						<AddList
							boardId={this.props.boardId}
							handleAddList={this.addList}
						/>
					</div>
				</div>
			);
		else {
			return <div>Loading.....</div>;
		}
	}
}

export default BoardLists;
