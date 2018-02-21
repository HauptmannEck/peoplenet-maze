import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Input extends Component {
	constructor(props) {
		super(props);

		this.onUpload = this.onUpload.bind(this);
		this.onLoad = this.onLoad.bind(this);

		this.reader = new FileReader();
		this.reader.onload = this.onLoad;
	}

	onUpload(file) {
		this.reader.readAsText(file);
	}

	onLoad(event) {
		console.log(event.target.result);
		this.props.onEntered(event.target.result);
	}

	render() {
		return (
			<RaisedButton
				containerElement='label'
				label='Upload Maze File'
			>
				<input
					type="file"
					accept=".txt"
					style={{display: 'none'}}
					onChange={e => this.onUpload(e.target.files[0])}
				/>
			</RaisedButton>
		);
	}
}

export default Input;