var game = (function () {
	var currentAnswer, currentAnswerIndex;

	var start = function () {
		currentAnswerIndex = 0;
		_setCurrentAnswer(currentAnswerIndex);
		return getCurrentAnswer();
	};

	var getCurrentAnswer = function (){
		return currentAnswer;
	}
	var _setCurrentAnswer = function(idx){
		currentAnswer = answers[idx];
	};

	var getNextAnswer = function(currentAnswerIndex){
		currentAnswerIndex += 1;
	};

	return {
		start : start,
		getCurrentAnswer : getCurrentAnswer,
		getNextAnswer : getNextAnswer
	};

}());