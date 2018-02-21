import React, {Component} from 'react';
import Card from './card';

class Cards extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 1
		};

		this.addNewCard = this.addNewCard.bind(this);
	}

	addNewCard() {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		let cards = [];
		for (let i = this.state.count; i > 0; i--) {
			cards.push(<Card key={i} onAnswered={this.addNewCard}/>);
		}

		return (
			<div>
				{cards}
			</div>
		);
	}
}

export default Cards;