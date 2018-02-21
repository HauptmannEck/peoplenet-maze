module.exports = function (mazeString) {
	let graph = [];
	let x = 0;
	let y = 0;
	let maxX = 0;
	for (let i = 0; i < mazeString.length; i++) {
		let type = null;

		const char = mazeString.charAt(i);
		switch (char) {
			case '.':
				type = 'open';
				break;
			case 'A':
				type = 'start';
				break;
			case 'B':
				type = 'end';
				break;
			case '\n':
				y++;
				if (x > maxX) {
					maxX = x - 1;
				}
				break;
		}

		if (type) {
			graph.push({
				x,
				y,
				type,
				visited: false,
				level: null,
				index: i,
				previousIndex: null
			})
		}

		x = char === '\n' ? 0 : x + 1;
	}

	return {graph, x: maxX, y};
};