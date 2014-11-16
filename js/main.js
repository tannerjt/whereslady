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