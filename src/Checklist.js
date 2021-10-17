import React, { Component } from "react";
import CheckListItems from "./CheckListItems";

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
	componentDidMount = () => {
		this.fetchdata();
	};
	render() {
		let checkListItems = this.state.items.map((item) => {
			return <CheckListItems key={item.id} itemName={item.name} />;
		});
		return (
			<div>
				<h1 className=" font-bold  m-3 "> + {this.props.checkListName}</h1>
				{checkListItems}
			</div>
		);
	}
}

export default Checklist;
