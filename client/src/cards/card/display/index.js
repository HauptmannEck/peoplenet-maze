import React, {Component} from 'react';
import './styles.css';

class Display extends Component {
	render() {
		const rows = [];

		for (let i = 0; i < this.props.y; i++) {
			const row = [];
			for (let j = 0; j < this.props.x; j++) {
				const vertex = this.props.graph.find(item => item.y === i && item.x === j);
				if (vertex) {
					row.push(vertex.type);
				} else {
					row.push('wall');
				}
			}
			rows.push(row);
		}

		return (
			<table>
				<tbody>
				{rows.map(row => (
					<tr>
						{row.map(col => (
							<td className={col} />
						))}
					</tr>
				))}
				</tbody>
			</table>
		);
	}
}

export default Display;