import React, { Component } from "react";
import Card from "./Card";
import Addcard from "./Addcard";

export class List extends Component {
	constructor(props) {
		super(props);

		this.state = { cards: [] };
	}

	UpdateData = () => {
		fetch(
			`https://api.trello.com/1/lists/${this.props.list.id}/cards?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
			{
				method: "GET",
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.setState({ cards: data });
			})
			.catch((err) => console.error(err));
	};
	componentDidMount() {
		this.UpdateData();
	}
	componentDidUpdate() {
		this.UpdateData();
	}

	render() {
		const { name } = this.props.list;

		let cards = this.state.cards.map((card) => {
			return <Card key={card.id} card={card} listName={name} />;
		});
		return (
			<div className="bg-gray-200 shadow flex-shrink-0 flex-column w-72 m-5 pl-4 pb-3 pt-3">
				<div className="font-bold">{name}</div>
				{cards}

				<Addcard listId={this.props.list.id} />
			</div>
		);
	}
}

export default List;
