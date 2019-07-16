// ==UserScript==
// @name         Perldoc Search
// @namespace    https://github.com/CollectorOfBolts
// @version      0.1
// @description  Restores some manner of search URL to the new Perldoc site
// @author       Ace Taylor
// @match        https://perldoc.perl.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	var params = (new URL(window.location)).searchParams;
	var search = params.get('q');
	if (!search) { return; }

	// minor hack: wait for Perldoc's resources to finish loading and setting up
	setTimeout(function() {
		var searchInput = document.getElementById("searchinput");
		searchInput.value = params.get('q');
		searchInput.nextElementSibling.click();
	}, 200);
})();
