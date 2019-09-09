import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import '../css/app.css';
import '../css/fontawesome-all.css';
// import '../scss/style.scss';
import 'animate.css';
import 'lightbox2/dist/css/lightbox.min.css';
import 'lightbox2/dist/js/lightbox-plus-jquery.js';
// import WOW from 'wow.js';
import {add, subtract, multiply,divide} from './modules/script.js';

console.log(add(10, 5));
console.log(subtract(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

import {wow} from './modules/wowAnimate.js';