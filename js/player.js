var player = (function () {
	var playerName;
	var playerScore = 0;
	//var maxScore = 100;

	var getPlayerName = function () {
		return playerName;
	};

	var setPlayerName = function (name) {
		playerName = name;
	};

	var getScore = function () {
		return playerScore;
	};

	var increaseScore = function (score) {
		playerScore += score;
		return playerScore;
	};

	return {
		setPlayerName : setPlayerName,
		getPlayerName : getPlayerName,
		getScore : getScore,
		increaseScore : increaseScore
	}
}());