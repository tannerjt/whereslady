var game = (function () {
	var currentAnswer, currentAnswerIndex;
	var currentHintIndex;
	var maxPointDistance = 500;

	var start = function () {
		currentAnswerIndex = 0;
		_setCurrentAnswer(currentAnswerIndex);
		showHint();
		map.on("click", _mapClick)
	};

	var getCurrentAnswer = function (){
		return currentAnswer;
	}
	var _setCurrentAnswer = function(idx){
		currentHintIndex = 0;
		currentAnswer = answers[idx];
	};

	var getNextAnswer = function(currentAnswerIndex){
		currentAnswerIndex += 1;
	};

	var showHint = function(){
		UI.showHint(currentAnswer.hint[currentHintIndex]);
		currentHintIndex++;
	};

	var _checkDistance = function (latlng) {
		return distance(latlng.lat, latlng.lng, 
				currentAnswer.location[0], currentAnswer.location[1], 'M');
	};

	var _mapClick = function(e){
		var distance = _checkDistance(e.latlng);
		
	};

	return {
		start : start,
		getCurrentAnswer : getCurrentAnswer,
		getNextAnswer : getNextAnswer
	};

}());