var map, baseMap;

map = L.map('map').setView([44.51, -121.53], 7);
baseMap = L.tileLayer('http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	subdomains: 'abcd',
	minZoom: 4,
	maxZoom: 18
});
baseMap.addTo(map);