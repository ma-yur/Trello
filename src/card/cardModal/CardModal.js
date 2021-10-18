import React, { Component } from "react";
import CheckLists from "./checkList/CheckLists";
import CheckListBtn from "./checkList/CheckListBtn";

import Cross from "../../components/buttons/Cross";

export class CardModal extends Component {
	constructor(props) {
		super(props);
		this.state = { addCheckListdata: [] };
	}

	handleClose = () => {
		this.props.handleClose();
	};

	handleAddCheckList = (data) => {
		this.setState({ addCheckListdata: data });
	};

	render() {
		return (
			<div
				className=" bg-black bg-opacity-60 absolute inset-0 h-full flex items-center justify-center "
				id="overlay"
			>
				<div className="bg-white  relative grid bg-gray-100 grid-cols-3 gap-8 w-5/12 p-20">
					<div className="col-span-2 p-4">
						<h1 className="text-bold">{this.props.name}</h1>
						<p className="text-gray-500">
							in list
							<span className="italic underline ">{this.props.listName}</span>
						</p>

						<div >
							<CheckLists
								cardId={this.props.cardId}
								addCheckListdata={this.state.addCheckListdata}
								checkListIds={this.props.checkListIds}
							/>
						</div>
					</div>
					<div className="col-span-1">
						<h1>Add to card</h1>
						<div className=" cursor-pointer rounded  bg-gray-300 my-3 p-1">
							<CheckListBtn
								cardId={this.props.cardId}
								handleAddCheckList={this.handleAddCheckList}
							/>
						</div>
					</div>
					<button
						onClick={this.handleClose}
						className="absolute top-0 right-0 p-10"
					>
						<Cross size="3xl" />
					</button>
				</div>
			</div>
		);
	}
}

export default CardModal;
