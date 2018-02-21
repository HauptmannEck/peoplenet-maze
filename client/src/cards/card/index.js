import React, {Component} from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import {Card as MatCard, CardHeader, CardText} from 'material-ui/Card';

import Input from './input';
import Display from './display';

class Card extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false,
			spinner: false,
			content: '',
			steps: 0,
			error: null
		};

		this.getAnswer = this.getAnswer.bind(this);
		this.onSuccess = this.onSuccess.bind(this);
		this.onError = this.onError.bind(this);
	}

	getAnswer(contents) {
		this.setState({
			spinner: true,
			contents
		});

		const data = {
			contents
		};

		fetch('/api/maze', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		})
			.then(res => res.json())
			.then(this.onSuccess)
			.catch(this.onError);
	}

	onSuccess(response) {
		console.log('Success:', response);
		this.setState({
			...response,
			spinner: false
		});

		this.props.onAnswered();
	}

	onError(error) {
		console.log('Error:', error);
		this.setState({
			error: error.message
		});
		this.props.onAnswered();
	}

	render() {
		let content = null;

		if (this.state.error) {
			content = <p>{this.state.error}</p>;
		} else if (this.state.spinner) {
			content = <CircularProgress size={60} thickness={7}/>;
		} else if (this.state.steps > 0) {
			content = <Display {...this.state} />;
		} else {
			content = <Input onEntered={this.getAnswer}/>;
		}


		return (
			<MatCard>
				<CardHeader
					title={this.state.steps > 0 ? "Maze Solution" : "Maze Solver"}
					subtitle={this.state.steps > 0 ? `Steps: ${this.state.steps}` : ""}
				/>
				<CardText>
					{content}
				</CardText>
			</MatCard>
		);
	}
}

export default Card;