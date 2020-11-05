import '../assets/png/git.png';
import '../assets/png/photoshop.png';
import '../assets/png/javascript.png';
import '../assets/png/html5.png';
import '../assets/png/css3.png';
import '../assets/png/angular.png';
import '../assets/png/sass.png';
import '../assets/png/webpack.png';
import '../assets/png/illustrator.png';
import '../assets/png/github.png';
import '../assets/png/mail.png';
import '../assets/png/linkedin.png';
import '../assets/png/typescript.png';
import '../assets/png/responsive.png';
import '../assets/png/bootstrap.png';
import '../assets/png/best-employee.png';
import '../assets/png/teamwork.png';
import '../assets/png/dad.png';
import '../assets/png/react.png';
import '../assets/png/vue.png';
import '../assets/png/node.png';

export const layers = {
	u: { corners: ['ufr', 'ulf', 'ubl', 'urb'], edges: ['uf', 'ul', 'ub', 'ur'], middles: ['u'] },
	f: { corners: ['ulf', 'ufr', 'drf', 'dfl'], edges: ['uf', 'fr', 'df', 'fl'], middles: ['f'] },
	r: { corners: ['ufr', 'urb', 'dbr', 'drf'], edges: ['dr', 'fr', 'ur', 'br'], middles: ['r'] },
	l: { corners: ['ubl', 'ulf', 'dfl', 'dlb'], edges: ['ul', 'fl', 'dl', 'bl'], middles: ['l'] },
	b: { corners: ['urb', 'ubl', 'dlb', 'dbr'], edges: ['ub', 'bl', 'db', 'br'], middles: ['b'] },
	d: { corners: ['drf', 'dbr', 'dlb', 'dfl'], edges: ['df', 'dr', 'db', 'dl'], middles: ['d'] },
	e: { middles: ['f', 'r', 'b', 'l'], edges: ['fl', 'fr', 'br', 'bl'] },
	m: { middles: ['d', 'b', 'u', 'f'], edges: ['db', 'ub', 'uf', 'df'] },
	s: { middles: ['r', 'd', 'l', 'u'], edges: ['dr', 'dl', 'ul', 'ur'] },
};

export const content = {
	f: {
		cubies: [
			{
				cubie: 'ulf',
				text: {
					tag: 'h1',
					value: 'Hi!',
				},
			},
			{
				cubie: 'uf',
				text: {
					tag: 'h3',
					value: 'I am',
				},
			},
			{
				cubie: 'ufr',
				text: {
					tag: 'h1',
					value: 'Levi.',
				},				
			},
			{
				cubie: 'fl',
				text: {
					tag: 'h3',
					value: 'You can',
				},				
			},
			{
				cubie: 'f',
				text: {
					tag: 'h4',
					value: 'checkout my',
				},				
			},
			{
				cubie: 'fr',
				text: {
					tag: 'h3',
					value: 'profile by',
				},
			},
			{
				cubie: 'dfl',
				text: {
					tag: 'h4',
					value: 'playing around',
				},				
			},
			{
				cubie: 'df',
				text: {
					tag: 'h3',
					value: 'with the',
				},					
			},
			{
				cubie: 'drf',
				text: {
					tag: 'h1',
					value: 'cube',
				},		
			},
		],
	},
	d: {
		title: 'ME',
		cubies: [
			{
				cubie: 'dfl',
				imgSrc: './imgs/best-employee.png',
				tooltip: 'Gamba Esfuerzo',
			},
			{
				cubie: 'df',
				imgSrc: './imgs/teamwork.png',
				tooltip: 'Rombo Teamate',
			},
			{
				cubie: 'drf',
				imgSrc: './imgs/dad.png',
				tooltip: 'Best Father',
			},
			{
				cubie: 'dl',
				imgSrc: './imgs/react.png',
				tooltip: 'React',
			},
			{
				cubie: 'd',
				imgSrc: './imgs/vue.png',
				tooltip: 'Vue',
			},
			{
				cubie: 'dr',
				imgSrc: './imgs/node.png',
				tooltip: 'Node',
			},
			{
				cubie: 'dlb',
				imgSrc: './imgs/git.png',
				tooltip: 'Puzzles',
			},
			{
				cubie: 'db',
				imgSrc: './imgs/illustrator.png',
				tooltip: 'Music',
			},
			{
				cubie: 'dbr',
				imgSrc: './imgs/sass.png',
				tooltip: 'Travel',
			},
		],
	},
	r: {
		title: 'SECONDARY SKILLS',
		cubies: [
			{
				cubie: 'ufr',
				imgSrc: './imgs/git.png',
				tooltip: 'NetCore',
			},
			{
				cubie: 'ur',
				imgSrc: './imgs/photoshop.png',
				tooltip: 'C#',
			},
			{
				cubie: 'urb',
				imgSrc: './imgs/javascript.png',
				tooltip: 'SQL',
			},
			{
				cubie: 'fr',
				imgSrc: './imgs/photoshop.png',
				tooltip: 'Photoshop',
			},
			{
				cubie: 'r',
				imgSrc: './imgs/illustrator.png',
				tooltip: 'Illustrator',
			},
			{
				cubie: 'br',
				imgSrc: './imgs/angular.png',
				tooltip: 'Excel',
			},
			{
				cubie: 'drf',
				imgSrc: './imgs/git.png',
				tooltip: 'Git',
			},
			{
				cubie: 'dr',
				imgSrc: './imgs/illustrator.png',
				tooltip: 'TFS',
			},
			{
				cubie: 'dbr',
				imgSrc: './imgs/sass.png',
				tooltip: 'Jira',
			},
		],
	},
	l: {
		title: 'WORK AND EDUCATION',
		cubies: [
			{
				cubie: 'ubl',
				imgSrc: './imgs/git.png',
				tooltip: 'Hexacta',
			},
			{
				cubie: 'ul',
				imgSrc: './imgs/photoshop.png',
				tooltip: 'Gamba FM',
			},
			{
				cubie: 'ulf',
				imgSrc: './imgs/javascript.png',
				tooltip: 'Rombo Velox SA',
			},
			{
				cubie: 'bl',
				imgSrc: './imgs/photoshop.png',
				tooltip: 'Freelance',
			},
			{
				cubie: 'l',
				imgSrc: './imgs/illustrator.png',
				tooltip: 'Duit',
			},
			{
				cubie: 'fl',
				imgSrc: './imgs/angular.png',
				tooltip: 'Profile',
			},
			{
				cubie: 'dlb',
				imgSrc: './imgs/git.png',
				tooltip: 'Programming',
			},
			{
				cubie: 'dl',
				imgSrc: './imgs/illustrator.png',
				tooltip: 'Programming',
			},
			{
				cubie: 'dfl',
				imgSrc: './imgs/sass.png',
				tooltip: 'Advertising',
			},
		],
	},
	u: {
		title: 'PRIMARY SKILLS',
		cubies: [
			{
				cubie: 'ubl',
				imgSrc: './imgs/html5.png',
				tooltip: 'HTML5',
			},
			{
				cubie: 'ub',
				imgSrc: './imgs/css3.png',
				tooltip: 'CSS3',
			},
			{
				cubie: 'urb',
				imgSrc: './imgs/javascript.png',
				tooltip: 'Javascript',
			},
			{
				cubie: 'ul',
				imgSrc: './imgs/angular.png',
				tooltip: 'Angular',
			},
			{
				cubie: 'u',
				imgSrc: './imgs/typescript.png',
				tooltip: 'Typescript',
			},
			{
				cubie: 'ur',
				imgSrc: './imgs/sass.png',
				tooltip: 'SASS',
			},
			{
				cubie: 'ulf',
				imgSrc: './imgs/webpack.png',
				tooltip: 'Webpack',
			},
			{
				cubie: 'uf',
				imgSrc: './imgs/bootstrap.png',
				tooltip: 'Bootstrap',
			},
			{
				cubie: 'ufr',
				imgSrc: './imgs/responsive.png',
				tooltip: 'Responsive Design',
			},
		],
	},
	b: {
		title: 'ABOUT',
		cubies: [
			{
				cubie: 'dbr',
				tooltip: 'Languages',
			},
			{
				cubie: 'db',
				tooltip: 'Mission',
			},
			{
				cubie: 'dlb',
				tooltip: 'Home',
			},
			{
				cubie: 'bl',
				tooltip: 'Good Humor',
			},
			{
				cubie: 'b',
				tooltip: 'Teamwork',
			},
			{
				cubie: 'br',
				tooltip: 'Fast Learner',
			},
			{
				cubie: 'ubl',
				imgSrc: './imgs/mail.png',
				tooltip: 'e-mail',
			},
			{
				cubie: 'ub',
				imgSrc: './imgs/linkedin.png',
				tooltip: 'Linkedin',
			},
			{
				cubie: 'urb',
				imgSrc: './imgs/github.png',
				tooltip: 'Github',
			},
		],
	},
};

export const cubeSides = {
	middles: {
		ids: ['u', 'd', 'f', 'b', 'r', 'l'],
		positionClass: 'cubie-middle-',
		orientationClass: 'cubie-middle-orientation-',
	},
	corners: {
		ids: ['ufr', 'ulf', 'urb', 'ubl', 'drf', 'dfl', 'dbr', 'dlb'],
		positionClass: 'cubie-corner-position-',
		orientationClass: 'cubie-corner-orientation-0',
	},
	edges: {
		ids: ['uf', 'ul', 'ur', 'ub', 'df', 'dl', 'dr', 'db', 'fr', 'fl', 'br', 'bl'],
		positionClass: 'cubie-edge-position-',
		orientationClass: 'cubie-edge-orientation-0',
	},
};
