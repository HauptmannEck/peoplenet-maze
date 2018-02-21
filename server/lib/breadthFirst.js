module.exports = function (graph) {
	const start = graph.find(item => item.type === 'start');
	start.visited = true;
	let queue = [start];
	let stopLoop = false;
	let steps = 0;

	while (queue.length > 0 && !stopLoop) {
		const current = queue.shift();
		const neighbors = graph.filter(item => getNeighbors(item.x, item.y, current.x, current.y));

		neighbors.forEach(item => {
			if (!item.visited) {
				item.visited = true;
				item.previousIndex = current.index;

				if (item.type === 'end') {
					stopLoop = true;
				}
				queue.push(item);
			}
		});

		steps++;
	}

	let path = graph.find(item => item.type === 'end');
	while (path && path.type !== 'start') {
		path = graph.find(item => item.index === path.previousIndex);

		if(path && path.type === 'open'){
			path.type = 'path';
		}
	}

	return {
		graph,
		steps
	};
};

function getNeighbors(itemX, itemY, currX, currY) {
	return (itemX === currX && itemY + 1 === currY) ||
		(itemX === currX && itemY - 1 === currY) ||
		(itemX + 1 === currX && itemY === currY) ||
		(itemX - 1 === currX && itemY === currY);
}