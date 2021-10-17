import React, { Component } from "react";

export class CheckListBtn extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "", isEditing: false };
	}

	updatedata = (name) => {
		fetch(
			`https://api.trello.com/1/checklists?name=${name}&idCard=${this.props.cardId}&key=a32c5c0c541016f7fd5c81bc1e4e47ef&token=a4711b0c6df1e11c11b241284521cf44441681fb61c66088f45fae8a9a4501f6`,
			{
				method: "POST",
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.props.handleAddCheckList(data);
			})
			.catch((err) => console.error(err));
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.updatedata(this.state.value);
		this.setState({ isEditing: false, value: "" });
	};

	render() {
		return (
			<>
				<h2 onClick={() => this.setState({ isEditing: true })}>Check list</h2>
				{this.state.isEditing && (
					<div className="absolute bg-gray-400 bg-opacity-20 p-2">
						<form
							onSubmit={this.handleSubmit}
							className="flex-col p-2 "
							action=""
						>
							<input
								className="block p-2"
								type="text"
								name=""
								id=""
								value={this.state.value}
								onChange={(e) => this.setState({ value: e.target.value })}
							/>
							<span className="flex items-center gap-4 m-2">
								<button className="bg-blue-500 px-1 my-2 py-2 rounded ">
									Add Checklist{" "}
								</button>
								<p
									onClick={() => this.setState({ isEditing: false })}
									className="text-xl hover:bg-gray-200 rounded-xl p-2 text-gray-500"
								>
									X
								</p>
							</span>
						</form>
					</div>
				)}
			</>
		);
	}
}

export default CheckListBtn;
