'use strict';

(function() {
	function moveCanvas(e) {
		const $mondrian = document.getElementById('js-mondrian');
		const pageXPos = e.pageX / 10;
		const pageYPos = e.pageY / 10;;
	}

	function init() {
		document.addEventListener('mousemove', moveCanvas);
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