var player = (function () {
	var playerName;
	var playerScore = 0;

	var getPlayerName = function () {
		return playerName;
	};

	var setPlayerName = function (name) {
		playerName = name;
	};

	var getScore = function () {
		return playerScore;
	};

	var _increaseScore = function (score) {
		playerScore += score;
		return playerScore;
	};

	var checkAnswer = function (point) {
		// check to see if answer is correct
	};

	return {
		setPlayerName : setPlayerName,
		getPlayerName : getPlayerName,
		getScore : getScore,
		checkAnswer : checkAnswer
	}
}());