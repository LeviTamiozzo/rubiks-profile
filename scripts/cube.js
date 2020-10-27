const cube = document.querySelector('.cube');
const buttons = document.querySelectorAll('nav ul li');

function buildCube() {
	const template = document.getElementById('cube-template').content;

	// Build Middles
	cubeSides.middles.forEach((mid) => {
		const clone = document.importNode(template, true);
		const cubeLayer = clone.querySelector('.cube-layer');
		const positionCubie = cubeLayer.querySelector('.cubie');
		const orientationCubie = positionCubie.querySelector('.cubie');
		const frontFace = orientationCubie.querySelector('.face-f');

		// Set id
		cubeLayer.setAttribute('id', `${mid}`);

		// Set position
		positionCubie.classList.add(`cubie-middle-${mid}`);

		// Set orientation and rotation
		orientationCubie.classList.add(`cubie-middle-orientation-${mid}`);

		// Set sticker faces
		frontFace.classList.add('cubie-sticker', `sticker-${mid}`);

		const innerSticker = document.createElement('div');
		innerSticker.classList.add('inner-sticker');
		frontFace.appendChild(innerSticker);

		cube.appendChild(cubeLayer);
	});

	// Build Corners
	var cornerPosition = 0;
	cubeSides.corners.forEach((corner) => {
		const side1 = corner[0];
		const side2 = corner[1];
		const side3 = corner[2];

		const clone = document.importNode(template, true);
		const cubeLayer = clone.querySelector('.cube-layer');
		const positionCubie = cubeLayer.querySelector('.cubie');
		const orientationCubie = positionCubie.querySelector('.cubie');
		const faces = orientationCubie.querySelectorAll('.cubie-face');

		// Set id
		cubeLayer.setAttribute('id', `${side1}${side2}${side3}`);

		// Set position
		positionCubie.classList.add(`cubie-corner-position-${cornerPosition}`);
		cornerPosition++;

		// Set orientation
		orientationCubie.classList.add('cubie-corner-orientation-0');

		// Set sticker faces
		faces[0].classList.add('cubie-sticker', `sticker-${side1}`);
		faces[1].classList.add('cubie-sticker', `sticker-${side2}`);
		faces[2].classList.add('cubie-sticker', `sticker-${side3}`);

		const innerSticker = document.createElement('div');
		innerSticker.classList.add('inner-sticker');
		faces[0].appendChild(innerSticker);

		const innerSticker2 = document.importNode(innerSticker, true);
		faces[1].appendChild(innerSticker2);

		const innerSticker3 = document.importNode(innerSticker, true);
		faces[2].appendChild(innerSticker3);

		cube.appendChild(cubeLayer);
	});

	// Build Edges
	var edgePosition = 0;
	cubeSides.edges.forEach((edge) => {
		const side1 = edge[0];
		const side2 = edge[1];

		const clone = document.importNode(template, true);
		const cubeLayer = clone.querySelector('.cube-layer');
		const positionCubie = cubeLayer.querySelector('.cubie');
		const orientationCubie = positionCubie.querySelector('.cubie');
		const faces = orientationCubie.querySelectorAll('.cubie-face');

		// Set id
		cubeLayer.setAttribute('id', `${side1}${side2}`);

		// Set position
		positionCubie.classList.add(`cubie-edge-position-${edgePosition}`);
		edgePosition++;

		// Set orientation
		orientationCubie.classList.add('cubie-edge-orientation-0');

		// Set sticker faces
		faces[0].classList.add('cubie-sticker', `sticker-${side1}`);
		faces[1].classList.add('cubie-sticker', `sticker-${side2}`);

		const innerSticker = document.createElement('div');
		innerSticker.classList.add('inner-sticker');
		faces[0].appendChild(innerSticker);

		const innerSticker2 = document.importNode(innerSticker, true);
		faces[1].appendChild(innerSticker2);

		cube.appendChild(cubeLayer);
	});

	addCubeContent();
}

function addCubeContent() {
	for (const face in faces) {
		const faceObject = faces[face];
		const middleCubieSticker = document.getElementById(`${face}`).querySelector('.cubie-sticker');
		middleCubieSticker.setAttribute('title', faceObject.title);

		faceObject.content?.forEach((cont) => {
			const innerSticker = document.getElementById(cont.cubie).querySelector(`.sticker-${cont.face} .inner-sticker`);

			if (cont.imgSrc) {
				var img = document.createElement('img');
				img.src = cont.imgSrc;
				innerSticker.appendChild(img);
			}
		});
	}
}

buildCube();

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

buttons.forEach((button) =>
	button.addEventListener('click', () => {
		move(`${button.dataset.face}1`);
	})
);
