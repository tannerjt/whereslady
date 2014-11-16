var game = (function () {
	var currentAnswer, currentAnswerIndex;
	var currentHintIndex;
	var maxPointDistance = 4;	//miles

	var start = function () {
		currentAnswerIndex = 0;
		_setCurrentAnswer(currentAnswerIndex);
		map.on("click", _mapClick)
	};

	var getCurrentAnswer = function (){
		return currentAnswer;
	};

	var _setCurrentAnswer = function(idx){
		currentHintIndex = 0;
		currentAnswer = answers[idx];
		showHint();
	};

	var getNextAnswer = function(){
		currentAnswerIndex += 1;
		return currentAnswerIndex;
	};

	var showHint = function(){
		if (currentHintIndex <= currentAnswer.hint.length - 1) {
			UI.showHint(currentAnswer.hint[currentHintIndex]);
			currentHintIndex++;
		} else {
			alert("No more hints.");
			_setCurrentAnswer(getNextAnswer());
		}
	};

	var _checkDistance = function (latlng) {
		return distance(latlng.lat, latlng.lng, 
				currentAnswer.location[0], currentAnswer.location[1], 'M');
	};

	var _mapClick = function(e){
		var distance = _checkDistance(e.latlng);
		if (distance <= maxPointDistance){
			player.increaseScore(100 - (20 * (currentHintIndex - 1)));
			UI.updateScore(player.getScore());
			alert("Congrats! You found Lady.");
			_setCurrentAnswer(getNextAnswer());
		} else {
			showHint();
			alert("Nice try! No dice.");
		}
		
	};

	return {
		start : start,
		getCurrentAnswer : getCurrentAnswer,
		getNextAnswer : getNextAnswer
	};

}());