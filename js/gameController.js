var game = (function () {
	var currentAnswer, currentAnswerIndex;
	var currentHintIndex;

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
	}

	var _mapClick = function(){

	};

	return {
		start : start,
		getCurrentAnswer : getCurrentAnswer,
		getNextAnswer : getNextAnswer
	};

}());