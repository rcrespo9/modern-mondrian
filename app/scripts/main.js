'use strict';

(function() {
	const $mondrian = document.getElementById('js-mondrian');
	const transformFactor = 0.1;

	const scale = (n, min, max) => n * (max - min) + min;

	let $mondrianRect = $mondrian.getBoundingClientRect();

	function moveCanvas(e) {
		let posX = e.pageX - $(this).offset().left;
		let posY = e.pageY - $(this).offset().top;

		let scaledX = scale(posX / $mondrianRect.width, -1, 1);
		let scaledY = scale(posY / $mondrianRect.height,  -1, 1);

		$mondrian.classList.remove('mondrian-canvas--inactive');
		$mondrian.style.transform = `matrix3d(
			1, 0, ${-scaledX * transformFactor}, 0,
			0, 1, ${-scaledY * transformFactor}, 0,
			0, 0, 1, 0,
			0, 0, 0, 1
		)`;
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