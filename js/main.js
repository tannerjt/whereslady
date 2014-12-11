$("#gameDetails").hide();

// set player name when user clicks start
$("#start").on('click', function (e) {

	if ($("#name").val()=="")
	{
		return;
	}
	e.preventDefault();
	// Hide name prompt
	$("#prompt").hide();
	$("#gameDetails").show();
	// Set player name
	player.setPlayerName($("#name").val());
	UI.setPlayerName(player.getPlayerName());
	UI.updateScore(player.getScore());
	// Initialize game
	game.start();

	$(function () {
  	$('[data-toggle="tooltip"]').tooltip()
})
})