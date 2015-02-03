$("#gameDetails").hide();
// Show welcome modal
UI.showWelcomeModal("#welcome-modal");

$("#name").on('keypress', function (e) {
	// start game on enter (key code 13)
	if( e.charCode == 13 ) {
		$("#start").trigger('click');
	}

	// highlight start when start typing
	$("#start").addClass('typing');
});

// set player name when user clicks start
$("#start").on('click', function (e) {

	if ($("#name").val() == "")
	{	
		$("#nameAlert").show(500);
		return;
	}
	// Hide name prompt
	$("#gameDetails").show();
	// Set player name
	player.setPlayerName($("#name").val());
	UI.setPlayerName(player.getPlayerName());
	UI.updateScore(player.getScore());
	// Initialize game
	game.start();
	$("#welcome-modal").modal("hide");
	$(function () {
  	$('[data-toggle="tooltip"]').tooltip()
})
})