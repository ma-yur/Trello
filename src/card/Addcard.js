import React, { Component } from "react";

import PrimaryBtn from "../components/buttons/PrimaryBtn";
import Cross from "../components/buttons/Cross";

export class Addcard extends Component {
	constructor(props) {
		super(props);
		this.state = { isEditing: false, cardName: "" };
	}
	handleEdit = () => {
		this.setState({ isEditing: true });
	};
	closeEditing = () => {
		this.setState({ isEditing: false });
	};
	updatedata = () => {
		if (this.state.cardName === "") return;
		fetch(
			`https://api.trello.com/1/cards?name=${this.state.cardName}&idList=${this.props.listId}&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
			{
				method: "POST",
				headers: {
					Accept: "application/json",
				},
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.props.cardAdded(data);
			})

			.catch((err) => console.error(err));
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.updatedata();
		this.setState({ isEditing: false, cardName: "" });
	};

	render() {
		if (!this.state.isEditing) {
			return (
				<div onClick={this.handleEdit}>
					<p className=" hover:bg-gray-300 cursor-pointer rounded w-11/12 p-1  text-gray-500 my-2">
						{" "}
						+ Add a card
					</p>
				</div>
			);
		} else {
			return (
				<div>
					<form
						className="flex-col inline-block my-2"
						onSubmit={this.handleSubmit}
						action=""
					>
						<input
							className="p-2 h-20 mb-4 shadow-md "
							type="text"
							name=""
							id=""
							value={this.state.cardName}
							onChange={(e) => {
								this.setState({ cardName: e.target.value });
							}}
						/>
						<div className=" flex gap-5 items-center">
							<PrimaryBtn title={"Add card"} />
							<div onClick={this.closeEditing} className="text-gray-400  p-1">
								<Cross size={"2xl"} />
							</div>
						</div>
					</form>
				</div>
			);
		}
	}
}

export default Addcard;
