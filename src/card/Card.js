import React, { Component } from "react";
import CardModal from "./cardModal/CardModal";

export class Card extends Component {
	constructor(props) {
		super(props);
		this.state = { openModal: false };
	}

	openModal = (e) => {
		this.setState({ openModal: true });
	};

	CloseModal = () => {
		this.setState({ openModal: false });
	};
	deletecard = () => {
		fetch(
			`https://api.trello.com/1/cards/${this.props.card.id}?key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
			{
				method: "DELETE",
			}
		).catch((err) => console.error(err));
	};
	handleDelete = (e) => {
		e.stopPropagation();
		this.deletecard();
		this.props.handleDelete(this.props.card.id);
	};

	render() {
		const { name } = this.props.card;
		return (
			<div>
				<div
					onClick={this.openModal}
					className="bg-white hover:bg-gray-100 shadow rounded w-11/12 p-1 my-2"
				>
					<div className="flex justify-between">
						<p>{name}</p>
						<div>
							<button
								onClick={this.handleDelete}
								className="px-2 text-gray-500 "
							>
								{" "}
								x
							</button>
						</div>
					</div>
				</div>
				{this.state.openModal && (
					<CardModal
						handleClose={this.CloseModal}
						name={name}
						listName={this.props.listName}
						checkListIds={this.props.card.idChecklists}
						cardId={this.props.card.id}
					/>
				)}
			</div>
		);
	}
}

export default Card;
