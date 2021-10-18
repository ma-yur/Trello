import React, { Component } from "react";

import CheckListItems from "./CheckListItems";
import AddCheckListItems from "./AddCheckListItems";

import DeleteBtn from "../../../DeleteBtn";

export class Checklist extends Component {
	constructor(props) {
		super(props);
		this.state = { items: [] };
	}
	fetchdata = () => {
		fetch(
			`https://api.trello.com/1/checklists/${this.props.checkList.id}/checkItems?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
			{
				method: "GET",
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => this.setState({ items: data }))
			.catch((err) => console.error(err));
	};

	deleteCheckList = (id) => {
		fetch(
			`https://api.trello.com/1/checklists/${id}?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
			{
				method: "DELETE",
			}
		).catch((err) => console.error(err));
	};
	componentDidMount = () => {
		this.fetchdata();
	};

	handleAddItem = (newItem) => {
		this.setState({ items: [...this.state.items, newItem] });
	};
	deleteItem = (checkItemId) => {
		this.setState({
			items: this.state.items.filter((item) => {
				return item.id !== checkItemId;
			}),
		});
	};
	render() {
		return (
			<div>
				<div className="flex items-center justify-between">
					<h1 className=" font-bold  m-3 "> + {this.props.checkListName}</h1>
					<div onClick={this.handleDelete}>
						<DeleteBtn />
					</div>
				</div>
				<CheckListItems
					checkListId={this.props.checkList.id}
					checkListItems={this.state.items}
					handleDeleteItem={this.deleteItem}
				/>
				<AddCheckListItems
					checkListId={this.props.checkList.id}
					addItem={this.handleAddItem}
				/>
			</div>
		);
	}
}

export default Checklist;
