/*
corners  _.-'-._                 edges    _.-'-._
     _.-'-._3_.-'-._                  _.-'-._ _.-'-._
 _.-'-._ _.-'-._ _.-'-._          _.-'-._1_.-'-._3_.-'-._
|-._ _.-'-._U_.-'-._ _.-|        |-._ _.-'-._U_.-'-._ _.-|
| 1 |-._ _.-'-._ _.-| 2 |        |   |-._ _.-'-._ _.-|   |
|-._|   |-._ _.-|   |_.-|        |-._| 0 |-._ _.-| 2 |_.-|
|   |-._|   0   |_.-|   |        | 9 |-._|   |   |_.-| 10|
|-._| F |-._|_.-| R |_.-|        |-._| F |-._|_.-| R |_.-|
| 5 |-._|   |   |_.-| 6 |   5--> |   |-._|  8|   |_.-|   | <--7
'-._|   |-._|_.-|   |_.-'        '-._| 4 |-._|_.-| 6 |_.-'
    '-._|   |   |_.-'                '-._|   |   |_.-'
        '-._4_.-'                        '-._|_.-'

U       F        R       L       B       D
up    front    right    left    back    down
*/
const cube = document.querySelector('.cube');

const layers = {
	u: { corners: [0, 1, 3, 2], edges: [0, 1, 3, 2] },
	f: { corners: [1, 0, 4, 5], edges: [0, 8, 4, 9] },
	r: { corners: [0, 2, 6, 4], edges: [6, 8, 2, 10] },
	l: { corners: [3, 1, 5, 7], edges: [1, 9, 5, 11] },
	b: { corners: [2, 3, 7, 6], edges: [3, 11, 7, 10] },
	d: { corners: [4, 6, 7, 5], edges: [4, 6, 7, 5] },
	e: { middles: ['f', 'r', 'b', 'l'], edges: [9, 8, 10, 11] },
	m: { middles: ['d', 'b', 'u', 'f'], edges: [7, 3, 0, 4] },
	s: { middles: ['r', 'd', 'l', 'u'], edges: [6, 5, 1, 2] }
};

/** Adds classes to cubies to start animation. */
function move(turn) {
	const side = turn[0];
	const layer = layers[turn[0]];
	var cubies = [];

	// Push middles
	if (!layer.middles) {
		const m = document.querySelector(`.cubie-middle-${side}`);
		cubies.push(m.parentNode);
	}

	layer.middles?.forEach((mid) => {
		const e = document.querySelector(`.cubie-middle-${mid}`);
		cubies.push(e.parentNode);
	});

	// Push corners
	layer.corners?.forEach((corner) => {
		const c = document.querySelector(`.cubie-corner-position-${corner}`);
		cubies.push(c.parentNode);
	});

	// Push edges
	layer.edges.forEach((edge) => {
		const e = document.querySelector(`.cubie-edge-position-${edge}`);
		cubies.push(e.parentNode);
	});

	// Add classes
	cubies.forEach((cubie) => {
		cubie.classList.add('turn');
		cubie.classList.add(`turn-${turn}`);
	});
}

/**	Updates classes of cubie. This should be called on completion of
	animation for every cubie that was involved in animation. */
function updateCubie() {
	var match = this.className.match(/turn\-(..)/);
	this.classList.remove('turn');
	this.classList.remove(match[0]);

	const step = +match[1][1];
	const side = match[1][0];
	const layer = layers[side];
	var div = this.children[0];

	var re = /(cubie-corner-position-)(\d+)/;
	if ((match = div.className.match(re))) {
		const idx = layer.corners.indexOf(+match[2]);
		var newVal = layer.corners[(idx + step) & 3];
		div.className = div.className.replace(re, '$1' + newVal);

		div = div.children[0];
		re = /(cubie-corner-orientation-)(\d+)/;
		match = div.className.match(re);
		newVal = (+match[2] + (side != 'u' && side != 'd') * (step & 1) * (1 + (idx & 1))) % 3;
		div.className = div.className.replace(re, '$1' + newVal);
	}

	re = /(cubie-edge-position-)(\d+)/;
	if ((match = div.className.match(re))) {
		const idx = layer.edges.indexOf(+match[2]);
		var newVal = layer.edges[(idx + step) & 3];
		div.className = div.className.replace(re, '$1' + newVal);

		div = div.children[0];
		re = /(cubie-edge-orientation-)(\d+)/;
		match = div.className.match(re);
		newVal = +match[2] ^ ((side == 'f' || side == 'b' || side == 'm' || side == 'e' || side == 's') & step);
		div.className = div.className.replace(re, '$1' + newVal);
	}

	if (side == 'm' || side == 'e' || side == 's') {
		div = this.children[0];
		re = /(cubie-middle-)([a-z]+)/;
		if ((match = div.className.match(re))) {
			const idx = layer.middles.indexOf(match[2]);
			var newVal = layer.middles[(idx + step) & 3];
			div.className = div.className.replace(re, '$1' + newVal);

			div = div.children[0];
			re = /(cubie-middle-orientation-)(\D+)/;
			match = div.className.match(re);
			div.className = div.className.replace(re, '$1' + newVal);
		}
	}
}

/**	Generates and executes random move */
var nextMove = (function () {
	var prevSide = '';
	var sides = ['u', 'f', 'r', 'l', 'b', 'd', 'm', 'e', 's'];
	return function () {
		if (document.querySelector('.cube-layer.turn')) return;
		var side = prevSide;
		while (side == prevSide) side = sides[(Math.random() * 8) | 0];
		var step = 1 + ((Math.random() * 3) | 0);
		setTimeout(function () {
			move(`${side}${step}`);
		}, 10);
		prevSide = side;
	};
})();

(function () {
	// add `transitionend` listeners for updating classes and starting next move
	var layerDivs = document.querySelectorAll('.cube-layer');
	for (var i = 0; i < layerDivs.length; ++i) {
		layerDivs[i].addEventListener('transitionend', updateCubie, true);
		// layerDivs[i].addEventListener('transitionend', nextMove, true);
	}
})();

const buttons = document.querySelectorAll('nav ul li');
buttons.forEach((button) =>
	button.addEventListener('click', () => {
		move(`${button.dataset.face}1`);
	})
);
