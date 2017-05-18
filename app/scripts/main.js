'use strict';

(function() {
	const $mondrian = document.getElementById('js-mondrian');

	function moveCanvas(e) {
		let posX = e.offsetX;
		let posY = e.offsetY;

		$mondrian.classList.remove('mondrian-canvas--inactive');
		$mondrian.style.transform = `rotateX(${posX}deg) rotateY(${posY}deg)`;
	}

	function leavingCanvas(e) {
		$mondrian.classList.add('mondrian-canvas--inactive');
	}

	function init() {
		$mondrian.addEventListener('mouseover', moveCanvas);
		$mondrian.addEventListener('mouseout', leavingCanvas);
	}

	function ready(fn) {
	  if (document.readyState != 'loading'){
	    fn();
	  } else {
	    document.addEventListener('DOMContentLoaded', init);
	  }
	}

	ready(init);
})();