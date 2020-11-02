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
import '../assets/png/git.png';
import '../assets/png/photoshop.png';
import '../assets/png/javascript.png';
import '../assets/png/html5.png';
import '../assets/png/css3.png';
import '../assets/png/angular.png';
import '../assets/png/sass.png';
import '../assets/png/webpack.png';
import '../assets/png/illustrator.png';

export const layers = {
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

export const content = {
	f: {
		title: 'ABOUT',
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
		cubies: [
			{
				cubie: 'ufr',
				face: 'u',
				imgSrc: './imgs/git.png',
            },
            {
                cubie: 'ulf',
                face: 'u',
                imgSrc: './imgs/photoshop.png'
            },
            {
                cubie: 'urb',
                face: 'u',
                imgSrc: './imgs/javascript.png'
            },
            {
                cubie: 'ubl',
                face: 'u',
                imgSrc: './imgs/html5.png'
            },
            {
                cubie: 'ub',
                face: 'u',
                imgSrc: './imgs/css3.png'
            },
            {
                cubie: 'ul',
                face: 'u',
                imgSrc: './imgs/angular.png'
            },
            {
                cubie: 'ur',
                face: 'u',
                imgSrc: './imgs/webpack.png'
            },
            {
                cubie: 'uf',
                face: 'u',
                imgSrc: './imgs/illustrator.png'
            },
            {
                cubie: 'u',
                face: 'u',
                imgSrc: './imgs/sass.png'
            }
		],
	},
	b: {
		title: 'AWARDS',
	},
};

export const cubeSides = {
    middles: ['u', 'd', 'f', 'b', 'r', 'l'],
    corners: ['ufr', 'ulf', 'urb', 'ubl', 'drf', 'dfl', 'dbr', 'dlb'],
    edges: ['uf', 'ul', 'ur', 'ub', 'df', 'dl', 'dr', 'db', 'fr', 'fl', 'br' ,'bl'],
}