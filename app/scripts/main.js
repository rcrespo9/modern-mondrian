'use strict';

(function() {
	const $mondrian = document.getElementById('js-mondrian');

	function init() {
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