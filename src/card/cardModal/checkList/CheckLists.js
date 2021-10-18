import React, { Component } from "react";

import Checklist from "./Checklist";

export class CheckLists extends Component {
	constructor(props) {
		super(props);
		this.state = { checklistsData: [] };
	}

	updateData = (checkListId) => {
		return fetch(
			`https://api.trello.com/1/checklists/${checkListId}?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
			{
				method: "GET",
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				return data;
			})
			.catch((err) => console.error(err));
	};

	componentDidMount = () => {
		this.props.checkListIds.forEach((checkListId) => {
			this.updateData(checkListId).then((data) => {
				this.setState({
					checklistsData: [...this.state.checklistsData, data],
				});
			});
		});
	};
	componentDidUpdate = (prev) => {
		if (prev.addCheckListdata.name !== this.props.addCheckListdata.name) {
			this.setState({
				checklistsData: [
					...this.state.checklistsData,
					this.props.addCheckListdata,
				],
			});
		}
	};
	deleteCheckList = (id) => {
		this.setState({
			checklistsData: this.state.checklistsData.filter((checkList) => {
				return checkList.id !== id;
			}),
		});
	};
	render() {
		let checkLists = this.state.checklistsData.map((checkList) => {
			return (
				<Checklist
					key={checkList.id}
					checkListName={checkList.name}
					checkList={checkList}
					handleDelete={this.deleteCheckList}
				/>
			);
		});
		return <div>{checkLists}</div>;
	}
}

export default CheckLists;
