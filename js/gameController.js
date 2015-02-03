var game = (function () {
	var currentAnswer, currentAnswerIndex;
	var currentHintIndex;
	var maxPointDistance = 4;	//miles
	var clickLocations = [];
	var markerLocation = undefined;
	var maxScore;
	var gameOver = false;

	var start = function () {
		currentAnswerIndex = 0;
		_setCurrentAnswer(currentAnswerIndex);
		map.on("click", _mapClick)
	};

	var getCurrentAnswer = function (){
		return currentAnswer;
	};

	var _setCurrentAnswer = function(idx){
		if (idx < answers.length) {
			currentHintIndex = 0;
			currentAnswer = answers[idx];
			maxScore = (idx + 1) * 100;
			UI.updateMaxScore(maxScore);
			showHint();
		} else {
			UI.showGameOverModal("#gameOver-modal");
			$("#exit").on('click', function (e) {
				$("#gameOver-modal").modal("hide");
			});
			gameOver = true;
		}
		_updateGameProgress();
	};

	var _updateGameProgress = function () {
		// code to update game progress bar
		UI.showGameProgress(currentAnswerIndex, answers.length);
	};

	var getNextAnswer = function(){
		_removeLayers();
		currentAnswerIndex += 1;
		return currentAnswerIndex;
	};

	var showHint = function(){
		if (currentHintIndex <= currentAnswer.hint.length - 1) {
			UI.showHint(currentAnswer.hint[currentHintIndex]);
			UI.showHintNum(currentHintIndex + 1, currentAnswer.hint.length);
			currentHintIndex++;
			return true;
		} else {
			_setCurrentAnswer(getNextAnswer());

			
			if(!gameOver) {
				$("#failMessage").text("Sorry, no more hints.  Let's try a new location.");
				UI.showOopsModal("#oops-modal");
				$("#tryAgain").on('click', function (e) {
					$("#oops-modal").modal("hide");
				});
			}

			return false;
		}
	};

	var failMessages = [
		"Nice try, but no dice!",
		"Lady's not there, but keep looking.",
		"Don't give up!  Keep looking."
	];

	var _checkDistance = function (latlng) {
		return distance(latlng.lat, latlng.lng, 
				currentAnswer.location[0], currentAnswer.location[1], 'M');
	};

	var _mapClick = function(e){
		// Create and add clicked search area
		// 1609.34 meters in 1 mile
		var metersMile = 1609.34;
		var radius = 0;
		var location = new L.circle(e.latlng, radius, {
			fillOpacity : 0
		});
		var interval = (maxPointDistance * metersMile) / 100;
		clickLocations.push(location);
		location.addTo(map);
		// animate drawing of search area.. ie 'circle'
		var drawInterval = setInterval(function () {
			if(radius < (maxPointDistance * metersMile)) {
				location.setRadius(radius += interval);
			} else {
				checkFound();
				clearInterval(drawInterval);
			}
		}, 5);

		function checkFound() {
			var distance = _checkDistance(e.latlng);
			if (distance <= maxPointDistance){
				player.increaseScore(100 - (20 * (currentHintIndex - 1)));
				UI.updateScore(player.getScore());
				location.setStyle({
					color : "#8AFF00",
					fillColor : "#61B200",
					fillOpacity : 0.2
				});
				$("#description").html(
					'<img class="loc-image" src="./images/items/' + currentAnswer.image + '" />'
					+ '<p>' + currentAnswer.content + '</p>'
					+ '<p>' + currentAnswer.credit + '</p>'
				);
				UI.showSuccessModal("#success-modal");
				$("#continue").on('click', function (e) {
					$("#success-modal").modal("hide");
					_setCurrentAnswer(getNextAnswer());
					$("#continue").off('click');
				});

				showLocation();
			} else {
				if(!showHint()) return;
				location.setStyle({
					fillColor : "#400101",
					color : "#BF0404",
					fillOpacity : 0.2
				});

				$("#failMessage").text(failMessages[Math.floor(Math.random() * 3)]);
				UI.showOopsModal("#oops-modal");

				$("#tryAgain").on('click', function (e) {
					$("#oops-modal").modal("hide");
				});
			}
		}

		function showLocation() {
			// Show actual location on map
		}
		
	};

	_removeLayers = function () {
		for(var i = 0; i < clickLocations.length; i++) {
			map.removeLayer(clickLocations[i]);
		};
		clickLocations = [];
	};

	return {
		start : start,
		getCurrentAnswer : getCurrentAnswer,
		getNextAnswer : getNextAnswer
	};

}());