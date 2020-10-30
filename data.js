const coordsGap = 100;

const rotationsCoords = {
	u: {
        axis: 'y',
        reverse: true,
        corners: ['ufr', 'ubr', 'ubl', 'ufl'],
        edges: ['ur', 'ub', 'ul', 'uf']
	},
	d: {
        axis: 'y',
        corners: ['dfl', 'dfr', 'dbr', 'dbl'],
        edges: ['dr', 'db', 'dl', 'df']
	},
	f: {
        axis: 'z',
        corners: ['ufr', 'dfr', 'dfl', 'ufl'],
        edges: ['uf', 'fr', 'df', 'fl']
	},
	b: {
        axis: 'z',
        reverse: true,
        corners: ['ubr', 'dbr', 'dbl', 'ubl'],
        edges: ['ub', 'br', 'db', 'bl']
	},
	r: {
        axis: 'x',
        corners: ['ufr', 'ubr', 'dbr', 'dfr'],
        edges: ['ur', 'br', 'dr', 'fr']
	},
	l: {
        axis: 'x',
        reverse: true,
        corners: ['ufl', 'ubl', 'dbl', 'dfl'],
        edges: ['ul', 'bl', 'dl', 'fl']
    }
};

const faces = {
	f: {
		title: 'ABOUT',
		content: [
			{
				cubie: 'ufr',
				face: 'f',
				tooltip: 'Git',
				imgSrc: './assets/png/git.png',
			},
			{
				cubie: 'ufl',
				face: 'f',
				tooltip: 'Photoshop',
				imgSrc: './assets/png/photoshop.png',
			},
			{
				cubie: 'dfr',
				face: 'f',
				tooltip: 'Javascript',
				imgSrc: './assets/png/javascript.png',
			},
			{
				cubie: 'dfl',
				face: 'f',
				tooltip: 'HTML5',
				imgSrc: './assets/png/html5.png',
			},
			{
				cubie: 'uf',
				face: 'f',
				tooltip: 'CSS3',
				imgSrc: './assets/png/css3.png',
			},
			{
				cubie: 'fl',
				face: 'f',
				tooltip: 'Angular',
				imgSrc: './assets/png/angular.png',
			},
			{
				cubie: 'fr',
				face: 'f',
				tooltip: 'Webpack',
				imgSrc: './assets/png/webpack.png',
			},
			{
				cubie: 'df',
				face: 'f',
				tooltip: 'Illustrator',
				imgSrc: './assets/png/illustrator.png',
			},
			{
				cubie: 'f',
				face: 'f',
				tooltip: 'SASS',
				imgSrc: './assets/png/sass.png',
			},
		],
	},
	b: {
		title: 'CONTACT',
	},
	r: {
		title: 'PROJECTS',
	},
	l: {
		title: 'EXPERIENCE',
	},
	u: {
		title: 'SKILLS',
		content: [
			{
				cubie: 'ufr',
				face: 'u',
				imgSrc: './assets/png/git.png',
			},
			{
				cubie: 'ufl',
				face: 'u',
				imgSrc: './assets/png/photoshop.png',
			},
			{
				cubie: 'ubr',
				face: 'u',
				imgSrc: './assets/png/javascript.png',
			},
			{
				cubie: 'ubl',
				face: 'u',
				imgSrc: './assets/png/html5.png',
			},
			{
				cubie: 'ub',
				face: 'u',
				imgSrc: './assets/png/css3.png',
			},
			{
				cubie: 'ul',
				face: 'u',
				imgSrc: './assets/png/angular.png',
			},
			{
				cubie: 'ur',
				face: 'u',
				imgSrc: './assets/png/webpack.png',
			},
			{
				cubie: 'uf',
				face: 'u',
				imgSrc: './assets/png/illustrator.png',
			},
			{
				cubie: 'u',
				face: 'u',
				imgSrc: './assets/png/sass.png',
			},
		],
	},
	b: {
		title: 'AWARDS',
	},
};

const cubeSides = {
	middles: [
		{
			id: 'u',
			initialCoords: {
				y: -coordsGap,
			},
		},
		{
			id: 'd',
			initialCoords: {
				y: coordsGap,
			},
		},
		{
			id: 'f',
			initialCoords: {
				z: coordsGap,
			},
		},
		{
			id: 'b',
			initialCoords: {
				z: -coordsGap,
			},
		},
		{
			id: 'r',
			initialCoords: {
				x: coordsGap,
			},
		},
		{
			id: 'l',
			initialCoords: {
				x: -coordsGap,
			},
		},
	],
	corners: [
		{
			id: 'ufr',
			initialCoords: {
				x: coordsGap,
				y: -coordsGap,
				z: coordsGap,
			},
		},
		{
			id: 'ufl',
			initialCoords: {
				x: -coordsGap,
				y: -coordsGap,
				z: coordsGap,
			},
		},
		{
			id: 'ubr',
			initialCoords: {
				x: coordsGap,
				y: -coordsGap,
				z: -coordsGap,
			},
		},
		{
			id: 'ubl',
			initialCoords: {
				x: -coordsGap,
				y: -coordsGap,
				z: -coordsGap,
			},
		},
		{
			id: 'dfr',
			initialCoords: {
				x: coordsGap,
				y: coordsGap,
				z: coordsGap,
			},
		},
		{
			id: 'dfl',
			initialCoords: {
				x: -coordsGap,
				y: coordsGap,
				z: coordsGap,
			},
		},
		{
			id: 'dbr',
			initialCoords: {
				x: coordsGap,
				y: coordsGap,
				z: -coordsGap,
			},
		},
		{
			id: 'dbl',
			initialCoords: {
				x: -coordsGap,
				y: coordsGap,
				z: -coordsGap,
			},
		},
	],
	edges: [
		{
			id: 'uf',
			initialCoords: {
				y: -coordsGap,
				z: coordsGap,
			},
		},
		{
			id: 'ul',
			initialCoords: {
				y: -coordsGap,
				x: -coordsGap,
			},
		},
		{
			id: 'ur',
			initialCoords: {
				y: -coordsGap,
				x: coordsGap,
			},
		},
		{
			id: 'ub',
			initialCoords: {
				y: -coordsGap,
				z: -coordsGap,
			},
		},
		{
			id: 'df',
			initialCoords: {
				y: coordsGap,
				z: coordsGap,
			},
		},
		{
			id: 'dl',
			initialCoords: {
				y: coordsGap,
				x: -coordsGap,
			},
		},
		{
			id: 'dr',
			initialCoords: {
				y: coordsGap,
				x: coordsGap,
			},
		},
		{
			id: 'db',
			initialCoords: {
				y: coordsGap,
				z: -coordsGap,
			},
		},
		{
			id: 'fr',
			initialCoords: {
				x: coordsGap,
				z: coordsGap,
			},
		},
		{
			id: 'fl',
			initialCoords: {
				x: -coordsGap,
				z: coordsGap,
			},
		},
		{
			id: 'br',
			initialCoords: {
				x: coordsGap,
				z: -coordsGap,
			},
		},
		{
			id: 'bl',
			initialCoords: {
				x: -coordsGap,
				z: -coordsGap,
			},
		},
	],
};
