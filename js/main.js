var map, baseMap;

map = L.map('map').setView([44.51, -121.53], 6);
baseMap = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
});
baseMap.addTo(map);

// set player name when user clicks start
$("#start").on('click', function () {
	// Hide name prompt
	$("#prompt").hide();
	// Set player name
	player.setPlayerName($("#name").val());
	UI.setPlayerName(player.getPlayerName());
	UI.updateScore(player.getScore());
	// Initialize game
	game.start();
})