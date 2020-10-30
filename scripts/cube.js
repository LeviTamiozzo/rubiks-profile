const cube = document.querySelector('.cube');
const buttons = document.querySelectorAll('nav ul li');

function buildCube() {
	const template = document.getElementById('cube-template').content;

	// Build Cubes
	for (const pos in cubeSides) {
		cubeSides[pos].forEach((position) => {
			const clone = document.importNode(template, true);
			const cubeLayer = clone.querySelector('.cube-layer');
			const positionCubie = cubeLayer.querySelector('.cubie');

			// Set id
			cubeLayer.setAttribute('id', `${position.id}`);
			if (pos == 'middles') {
				cubeLayer.classList.add('middle');
			}

			// Set position
			positionCubie.style.transform = `translate3d(${position.initialCoords.x ? position.initialCoords.x : 0}px,
				${position.initialCoords.y ? position.initialCoords.y : 0}px,
				${position.initialCoords.z ? position.initialCoords.z : 0}px)`;
			cubeLayer.setAttribute('data-current-position', position.id);

			// Set sticker faces
			[...position.id].forEach((position) => {
				const face = positionCubie.querySelector(`.cubie-face.face-${position}`);

				face.classList.add('cubie-sticker', `sticker-${position}`);

				const innerSticker = document.createElement('div');
				innerSticker.classList.add('inner-sticker');
				face.appendChild(innerSticker);
			});

			cube.appendChild(cubeLayer);
		});
	}

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

			innerSticker.setAttribute('tooltip', cont.tooltip)
		});
	}
}

buildCube();

/** Adds classes to cubies to start animation. */
function move(turn) {
	const move = turn[0];
	var step = turn[1];
	var step = (step & 3) == 3 ? -1 : step & 3;
	step = rotationsCoords[move].reverse ? step * -1 : step;

	const cubies = document.querySelectorAll(`.cube-layer[data-current-position*="${move}"]`);

	cubies.forEach((cube) => {
		var cubeStep = step;
		const currentPosition = cube.dataset.currentPosition;
		const currentAxis = rotationsCoords[move].axis;

		const cubeRotationCoords = {
			x: cube.dataset.x ?? 0,
			y: cube.dataset.y ?? 0,
			z: cube.dataset.z ?? 0,
		};
		
		const isCorner = currentPosition.length == 3;
		const isEdge = currentPosition.length == 2;
		const isMiddle = currentPosition.length == 1;
		const is180DegRotated = (cubeRotationCoords.x & 3) == 2;
		const is90DegRotated = (cubeRotationCoords.x & 3) == 1;

		if (is180DegRotated) {
			cubeStep = step * -1;
		}

		if (is90DegRotated) {
			console.log('hola');
		}

		cubeRotationCoords[currentAxis] = parseInt(cubeRotationCoords[currentAxis]) + cubeStep;

		cube.style.transform = `rotateX(${cubeRotationCoords.x * 90}deg) rotateY(${cubeRotationCoords.y * 90}deg) rotateZ(${cubeRotationCoords.z * 90}deg)`;
		cube.setAttribute(`data-${currentAxis}`, cubeRotationCoords[currentAxis]);

		if (isCorner) {
			const index = rotationsCoords[move].corners.indexOf(currentPosition);
			const newPosition = rotationsCoords[move].corners[(index + step) & 3];
			cube.setAttribute('data-current-position', newPosition);
		}

		if (isEdge) {
			const index = rotationsCoords[move].edges.indexOf(currentPosition);
			const newPosition = rotationsCoords[move].edges[(index + step) & 3];
			cube.setAttribute('data-current-position', newPosition);
		}
	});
}

buttons.forEach((button) =>
	button.addEventListener('click', () => {
		move(`${button.dataset.face}`);
	})
);
