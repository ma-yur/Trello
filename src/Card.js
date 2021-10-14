import React, { Component } from 'react'

export class Card extends Component {
    render() {
        const {name} = this.props.card
        return (
            <div>
                <div className="bg-white rounded w-11/12 p-1 mx-auto my-1">
                    <p>{name}</p> 
                </div>
              
            </div>
        )
    }
}

export default Card
