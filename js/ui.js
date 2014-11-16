// handle updating of DOM UI
var UI = {
	
	setPlayerName : function (name) {
		// update player name in DOM
		$("#playerName").html(name);
	},

	updateScore : function (score) {
		// update score in DOM
		$("#playerScore").html(score);
	},

	showHint : function (hint) {
		// show hint in DOM
		$("#hint").html(hint);
	}

};