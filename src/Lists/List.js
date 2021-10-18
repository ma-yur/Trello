import React, { Component } from "react";
import Card from "../card/Card";
import Addcard from "../card/Addcard";
import DeleteMenu from "../DeleteMenu";

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
	deleteList = () => {
		fetch(
			`https://api.trello.com/1/lists/${this.props.list.id}/closed?value=true&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
			{
				method: "PUT",
			}
		).catch((err) => console.error(err));
	};
	componentDidMount() {
		this.UpdateData();
	}
	handleDelete = () => {
		// console.log("clecked");
		this.deleteList();
		this.props.handleDeleteList(this.props.list.id);
	};

	cardAdded = (cardData) => {
		this.setState({ cards: [...this.state.cards, cardData] });
	};
	deleteCard = (id) => {
		this.setState({
			cards: this.state.cards.filter((card) => {
				return card.id !== id;
			}),
		});
	};

	render() {
		const { name } = this.props.list;

		let cards = this.state.cards.map((card) => {
			return (
				<Card
					key={card.id}
					card={card}
					listName={name}
					handleDelete={this.deleteCard}
				/>
			);
		});
		return (
			<div className="bg-gray-200 shadow flex-shrink-0 flex-column w-72 m-5 pl-4 pb-3 pt-3">
				<div className="flex justify-between">
					<div className="font-bold">{name} </div>
					<div onClick={this.handleDelete}>
						<DeleteMenu />
					</div>
				</div>
				{cards}

				<Addcard listId={this.props.list.id} cardAdded={this.cardAdded} />
			</div>
		);
	}
}

export default List;
