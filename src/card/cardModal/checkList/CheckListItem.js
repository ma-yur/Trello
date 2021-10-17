import React, { Component } from 'react'

export class CheckListItem extends Component {
    render() {
        return (
            <div className=" mx-6 text-gray-700 hover:bg-gray-200 block w-full rounded px-2 my-1">
				+ {this.props.itemName}
			</div>
        )
    }
}

export default CheckListItem
