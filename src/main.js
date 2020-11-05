import { buildCube, doMove } from './scripts/cube';
import * as uiElements from './scripts/uiElements';
import './styles/app.scss';

buildCube(uiElements.cube);

uiElements.navButtons.forEach((button) =>
	button.addEventListener('click', () => {
		if (button.dataset.face == 'up') {
			doMove('l1');
			doMove('m1');
			doMove('r3');
		}
		if (button.dataset.face == 'down') {
			doMove('l3');
			doMove('m3');
			doMove('r1');
		}
		if (button.dataset.face == 'left') {
			doMove('u3');
			doMove('e1');
			doMove('d1');
		}
		if (button.dataset.face == 'right') {
			doMove('u1');
			doMove('e3');
			doMove('d3');
		}
	})
);

if (navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
	window.addEventListener(
		'load',
		function () {
			var el = document.createElement('span');
			el.innerHTML = 'Your browser may not be able to support this demo. Please use Google Chrome.';
			el.style.background = 'red';
			el.style.color = 'white';
			el.style.fontSize = '20px';
			el.style.padding = '2px';
			el.style.maxWidth = '65%';
			el.style.display = 'inline-block';

			document.body.insertBefore(el, document.body.firstChild);
		},
		false
	);
}
