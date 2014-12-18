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

	updateMaxScore : function (maxScore) {
		// update max score in DOM
		$("#maxScore").html(maxScore);
	},

	showHint : function (hint) {
		// show hint in DOM	
		$("#hint").html(hint);
	},

	showHintNum : function (hintNum, totalHints) {
		// update hint number in DOM
		$("#hintNum").html("(" + hintNum + "/" + totalHints + "):");
	},

	showGameProgress : function (answerIndex, totalAnswers) {
		// dynamically update progress bar
		var percent = ((answerIndex)/totalAnswers).toFixed(2) * 100;
		$('#gameProgress').html(percent + "%").css("width", percent + "%");
	}
};