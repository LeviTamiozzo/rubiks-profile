import { layers, content, cubeSides } from './data';

export function buildCube(cube) {
	const template = document.getElementById('cube-template').content;

	// Build Cube
	for (const side in cubeSides) {
		const isMiddle = side == 'middles';
		cubeSides[side].ids.forEach((id, index) => {
			const clone = document.importNode(template, true);
			const cubeLayer = clone.querySelector('.cube-layer');
			const positionCubie = cubeLayer.querySelector('.cubie');
			const orientationCubie = positionCubie.querySelector('.cubie');

			// Set id
			cubeLayer.setAttribute('id', `${id}`);

			// Set position
			if (isMiddle) {
				positionCubie.classList.add(`${cubeSides[side].positionClass}${id}`);
			} else {
				positionCubie.classList.add(`${cubeSides[side].positionClass}${index}`);
			}

			// Set orientation
			if (isMiddle) {
				orientationCubie.classList.add(`${cubeSides[side].orientationClass}${id}`);
			} else {
				orientationCubie.classList.add(`${cubeSides[side].orientationClass}`);
			}

			// Set sticker faces
			// frontFace.classList.add('cubie-sticker', `sticker-${mid}`);
			if (isMiddle) {
				const frontFace = orientationCubie.querySelector('.face-f');
				frontFace.classList.add('cubie-sticker', `sticker-${id}`);

				const innerSticker = document.createElement('div');
				innerSticker.classList.add('inner-sticker');
				frontFace.appendChild(innerSticker);
			} else {
				const faces = orientationCubie.querySelectorAll('.cubie-face');
				[...id].forEach((face, faceIndex) => {
					faces[faceIndex].classList.add('cubie-sticker', `sticker-${face}`);

					const innerSticker = document.createElement('div');
					innerSticker.classList.add('inner-sticker');
					faces[faceIndex].appendChild(innerSticker);
				});
			}

			cube.appendChild(cubeLayer);
		});
	}

	addCubeContent(cube);
}

function addCubeContent(cube) {
	for (const face in content) {
		const faceObject = content[face];
		const middleCubieSticker = cube.querySelector(`#${face} .cubie-sticker`);
		middleCubieSticker.setAttribute('title', faceObject.title);

		faceObject.cubies?.forEach((cubie) => {
			const innerSticker = cube.querySelector(`#${cubie.cubie} .sticker-${cubie.face} .inner-sticker`);

			if (cubie.imgSrc) {
				var img = document.createElement('img');
				img.src = cubie.imgSrc;
				innerSticker.appendChild(img);
			}

			if (cubie.tooltip) {
				innerSticker.classList.add('has-tooltip');
				innerSticker.setAttribute('tooltip', cubie.tooltip);
			}
		});
	}
}

/* Adds classes to cubies to start animation. */
export function doMove(turn) {
	const side = turn[0];
	const layer = layers[turn[0]];
	var cubies = [];

	// Push Cubies
	for (const side in layer) {
		layer[side].forEach((s) => {
			const m = document.querySelector(`.${cubeSides[side].positionClass}${s}`);
			cubies.push(m.parentNode);
		});
	}

	// Add classes
	cubies.forEach((cubie) => {
		cubie.classList.add('turn');
		cubie.classList.add(`turn-${turn}`);
		setTimeout(() => {
			updateCubie(cubie);
		}, 600);
	});
}

/*	Updates classes of cubie. This should be called on completion of
	animation for every cubie that was involved in animation. */
export function updateCubie(cubie) {
	var match = cubie.className.match(/turn\-(..)/);
	cubie.classList.remove('turn');
	cubie.classList.remove(match[0]);

	const step = +match[1][1];
	const side = match[1][0];
	const layer = layers[side];
	var div = cubie.children[0];

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
		div = cubie.children[0];
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

/*	Generates and executes random move */
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
