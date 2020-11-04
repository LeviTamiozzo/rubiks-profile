import { buildCube, doMove } from './scripts/cube';
import * as uiElements from './scripts/uiElements';
import './styles/app.scss';

buildCube(uiElements.cube);

uiElements.navButtons.forEach((button) =>
	button.addEventListener('click', () => {
		doMove(`${button.dataset.face}`);
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
