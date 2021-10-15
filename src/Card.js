import React, { Component } from "react";
import CardModal from "./CardModal";

export class Card extends Component {
	constructor(props) {
		super(props);
		this.state = { openModal: false };
	}

	openModal = () => {
		this.setState({ openModal: true });
	};

	CloseModal = () => {
		this.setState({ openModal: false });
	};

	render() {
		const { name } = this.props.card;
		return (
			<div>
				<div
					onClick={this.openModal}
					className="bg-white rounded w-11/12 p-1 mx-auto my-1"
				>
					<p>{name}</p>
				</div>
				{this.state.openModal && (
					<CardModal
						handleClose={this.CloseModal}
						name={name}
						listName={this.props.listName}
					/>
				)}
			</div>
		);
	}
}

export default Card;
