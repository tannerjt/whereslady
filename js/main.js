// set player name when user clicks start
$("#start").on('click', function () {
	// Hide name prompt
	$("#prompt").hide();
	// Set player name
	player.setPlayerName($("#name").val());
	// Initialize game
	game.start();
})