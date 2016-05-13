/*********************************************************************************
 * My Treehouse Projects #11,
 *
 * FSJS #4, Tic-Tac-Toe
 *
 *********************************************************************************/

"use strict";
(function() {
	/** helper function for setting a random color that isn't too light or too dark **/
	var rgb,rgbLighter, rgbLighterer;
		
	var randomBackgroundColor = function(el, el2) {
		var r;
		var g;
		var b;
		
		// RANDOM RGB TO SET NEW COLOR WITH EACH NEW QUOTE
		r = Math.ceil((Math.random() * 200));
		if (r > 150) {
			g = Math.ceil((Math.random() * 125));
		} else {
			g = Math.ceil((Math.random() * 200));
			if (r < 50) {
				g = Math.ceil((Math.random() * 50) + 100);
			}
		}
		if (r > 150 || g > 150) {
			b = Math.ceil((Math.random() * 125));
		} else {
			b = Math.ceil((Math.random() * 200));
			if (r < 50 || g < 50) {
				b = Math.ceil((Math.random() * 50) + 100);
			}
		}
		
		rgb = "rgb(" + r + "," + g + "," + b + ")";
		rgbLighter = "rgb(" + (r + 50) + "," + (g + 50) + "," + (b + 50) + ")";
		rgbLighterer = "rgb(" + (r + 75) + "," + (g + 75) + "," + (b + 75) + ")";
		
		el.style.background = rgb;
		el2.style.color = rgbLighterer;
	};
	/**********************************************************************************/



	/** start button ******************************************************************/
	var startButton = document.getElementById("startButton");
	var startScreen = document.getElementById("startScreen");
	var userNameScreen = document.getElementById("userNameScreen");
	var mainHeader = document.getElementsByClassName("mainHeader")[0];
	var ticTacTitle = document.getElementsByClassName("ticTacTitle")[0];
	var ticTacTitle2 = document.getElementsByClassName("ticTacTitle2")[0];

	startButton.onclick = function() {
		startScreen.style.display = "none";
		mainHeader.style.display = "block";
		userNameScreen.style.display = "block";
		randomBackgroundColor(userNameScreen,ticTacTitle);
		// ticTacTitle.style.color = rgbLighterer;
	};
	/**********************************************************************************/



	/** setting usernames *************************************************************/
	var firstPlayerName = document.getElementById("firstPlayerName");
	var userName1 = document.getElementById("userName1");
	var secondPlayerName = document.getElementById("secondPlayerName");
	var userName2 = document.getElementById("userName2");

	// MAKE SURE INPUTS ARE EMPTY ON LOAD
	window.onload = function() {
		userName1.value = "";
		userName2.value = "";
		message.innerHTML = "";
	};
		
	userName1.oninput = function() {
		firstPlayerName.innerHTML = userName1.value;
	};

	userName2.oninput = function() {
		secondPlayerName.innerHTML = userName2.value;
	};
	/**********************************************************************************/



	/** helper function for indicating player turn ************************************/
	var player1 = document.getElementById("player1");
	var player2 = document.getElementById("player2");

	var highlightPlaya = function(playaOn, playaOff) {
		playaOn.style.boxShadow = "10px 10px 10px rgba(245,245,245,0.7) inset, -10px -10px 10px rgba(245,245,245,0.7) inset, 5px 5px 7px rgba(50,50,50,0.7)"; 
		playaOff.style.boxShadow = "none";
	};
	/**********************************************************************************/



	/** begin button ******************************************************************/
	var beginButton = document.getElementById("beginButton");

	beginButton.onclick = function() {
		userNameScreen.style.display = "none";
		randomBackgroundColor(mainHeader,ticTacTitle);
		highlightPlaya(player1, player2);
	};
	/**********************************************************************************/



	/** winner responses **************************************************************/
	var cheers = ["Now you may take your opponents skull as a trophy!", "You are the baddest cat in town!", "Your Kung Fu is legendary!", "It's not fair how cool you are!", "Because of your awesome skill, you have been unanimously elected as supreme overloard of the entire multi-verse!"];
	/**********************************************************************************/



	/** winning combinations **********************************************************/
	var finish = document.getElementById("finish");
	var message = document.getElementsByClassName("message")[0];
	var screenWin = document.getElementsByClassName("screen-win")[0];

	var isWinner = false;

	// HELPER FUNCTION FOR CHECKING FOR WINNERS
	var checkForWinner = function(arae, xORo) {
		
	// HELPER FUNCTION FOR REVEALING WINNER PAGE
		var winnerPage = function() {
			mainHeader.style.display = "none";
			finish.style.display = "block";
			finish.classList.toggle(xORo, true);
			isWinner = true;
			randomBackgroundColor(screenWin,ticTacTitle2);
		};

	// CHECK FOR WINNING COMBINATION	
		for (var xo1 = 0; xo1 < arae.length; xo1++) {
			if (Number(arae[xo1]) === 4) {
				for (var xo2 = 0; xo2 < arae.length; xo2++) {
					if (Number(arae[xo2]) === 1) {
						for (var xo2a = 0; xo2a < arae.length; xo2a++) {	
							if (Number(arae[xo2a]) === 7) {
								winnerPage();
							}
						}
					} else if (Number(arae[xo2]) === 3) {
						for (var xo2b = 0; xo2b < arae.length; xo2b++) {	
							if (Number(arae[xo2b]) === 5) {
								winnerPage();
							}
						}
					} else if (Number(arae[xo2]) === 0) {
						for (var xo2c = 0; xo2c < arae.length; xo2c++) {	
							if (Number(arae[xo2c]) === 8) {
								winnerPage();
							}
						}
					} else if (Number(arae[xo2]) === 2) {
						for (var xo2d = 0; xo2d < arae.length; xo2d++) {	
							if (Number(arae[xo2d]) === 6) {
								winnerPage();
							}
						}
					}
				}	
			} else if (Number(arae[xo1]) === 0) {
				for (var xo3 = 0; xo3 < arae.length; xo3++) {
					if (Number(arae[xo3]) === 1) {
						for (var xo3a = 0; xo3a < arae.length; xo3a++) {	
							if (Number(arae[xo3a]) === 2) {
								winnerPage();
							}
						}
					} else if (Number(arae[xo3]) === 3) {
						for (var xo3b = 0; xo3b < arae.length; xo3b++) {	
							if (Number(arae[xo3b]) === 6) {
								winnerPage();
							}
						}
					}
				}
			} else if (Number(arae[xo1]) === 8) {
				for (var xo4 = 0; xo4 < arae.length; xo4++) {
					if (Number(arae[xo4]) === 5) {
						for (var xo4a = 0; xo4a < arae.length; xo4a++) {	
							if (Number(arae[xo4a]) === 2) {
								winnerPage();
							}
						}
					} else if (Number(arae[xo4]) === 7) {
						for (var xo4b = 0; xo4b < arae.length; xo4b++) {	
							if (Number(arae[xo4b]) === 6) {
								winnerPage();
							}
						}
					}
				}
			}
		}
		
	// DISPLAY AWESOME MESSAGE FOR WINNER
		var oneVal = userName1.value;
		var twoVal = userName2.value;
		var rn = Math.floor((Math.random() * cheers.length));
		var cheer = "! You are the winner!<br>" + cheers[rn] + "<br><br>Would you like to play again?";
		
		if (finish.classList.contains("screen-win-two")) {
			if (!twoVal) {
				message.innerHTML = "Congrats, X" + cheer;
			} else {
				message.innerHTML = "Congrats, " + oneVal + cheer;
			}
		} else if (finish.classList.contains("screen-win-one")) {
			if (!oneVal) {
				message.innerHTML = "Congrats, O" + cheer;
			} else {
				message.innerHTML = "Congrats, " + twoVal + cheer;
			}
		} 
	};
	/**********************************************************************************/

	
	
	/** computer player logic *********************************************************/
	var compMark = function(boks) {
		boks.classList.toggle("box-filled-1", true);
		boks.gottaMark = true;
		boks.mark = "o";
		highlightPlaya(player1, player2);
		ose.push(boks.marker);
		playaToggle = true;
	};
	
	var comPlay = function() {
		if (!box[4].gottaMark) {
			compMark(box[4]);
		} else if (!box[0].gottaMark) {
			compMark(box[0]);
		} else if (!box[2].gottaMark) {
			compMark(box[2]);
		} else if (!box[6].gottaMark) {
			compMark(box[6]);
		} else if (!box[8].gottaMark) {
			compMark(box[8]);
		} else if (!box[1].gottaMark) {
			compMark(box[1]);
		} else if (!box[5].gottaMark) {
			compMark(box[5]);
		} else if (!box[7].gottaMark) {
			compMark(box[7]);
		} else if (!box[3].gottaMark) {
			compMark(box[3]);
		}
	};
	/**********************************************************************************/
	


	/** marking a box *****************************************************************/
	var box = document.getElementsByClassName("box");
	var compCB = document.getElementById("compCB");

	// ARRAYS TO HOLD LOCATION OF ALL X AND ALL O
	var exes = [];
	var ose = [];

	// BOOLEAN TO TRACK TURNS - TRUE = X, FALSE =  O
	var playaToggle = true;

	for (var b = 0; b < box.length; b++) {
	// STICK A MARKER ON EACH BOX
		box[b].marker = b;
		
		box[b].addEventListener("click", function() {
			if (!this.gottaMark) {
				
			// SET BOX AS MARKED
				this.gottaMark = true;
			// X
				if (playaToggle) {
					this.classList.toggle("box-filled-2", true);
				// GIVE ELEMENT A MARK TO TRACK WHETHER IT IS AN X OR O
					this.mark = "x";
				// INDICATE PLAYERS TURN
					highlightPlaya(player2, player1);
				// TRACK LOCATION OF MOX BY STORING ITS INDEX IN AN ARRAY
					exes.push(this.marker);
					playaToggle = false;
			// Y
				} else {
					this.classList.toggle("box-filled-1", true);
				// GIVE ELEMENT A MARK TO TRACK WHETHER IT IS AN X OR O
					this.mark = "o";
				// INDICATE PLAYERS TURN
					highlightPlaya(player1, player2);
				// TRACK LOCATION OF MOX BY STORING ITS INDEX IN AN ARRAY
					ose.push(this.marker);
					playaToggle = true;
				}		
			} else {
				return;
			}
			
			if(compCB.checked) {
				comPlay();
			}
			
		// CHECK FOR WINNERS AFTER EACH TIME A BOX IS SELECTED
			checkForWinner(exes, "screen-win-two");
			checkForWinner(ose, "screen-win-one");

		// HNADLE TIE
			if (!isWinner && exes.length + ose.length === box.length) {
				mainHeader.style.display = "none";
				finish.style.display = "block";
				finish.classList.toggle("screen-win-tie", true);
				message.innerHTML = "Clasic 3T tie.  Good one.<br><br>Go again?";
			}
		});
		
	// SHOW X OR O ON HOVER DEPENDING ON PLEYRS TURN
		box[b].addEventListener("mouseover", function() {
			if (!this.gottaMark) {
				if (playaToggle) {
					this.classList.toggle("hoverX", true);
				} else {
					this.classList.toggle("hoverO", true);
				}
			}	
		});
		
	// HIDE HOVER SYMBOL
		box[b].addEventListener("mouseout", function() {
			if (!this.gottaMark) {
				this.classList.toggle("hoverX", false);
				this.classList.toggle("hoverO", false);
			}
		});
	}
	/**********************************************************************************/



	/** new game button ***************************************************************/
	var newGame = document.getElementById("newGame");

	newGame.onclick = function() {
		
	// EMPTY AND RESET BOXES
		for (var fin = 0; fin < box.length; fin++) {
			box[fin].classList.toggle("box-filled-1", false);
			box[fin].classList.toggle("box-filled-2", false);
			box[fin].classList.toggle("hoverX", false);
			box[fin].classList.toggle("hoverO", false);
			box[fin].mark = "";
			box[fin].gottaMark = false;
		}
		
	// EMPTY ARRAYS
		exes = [];
		ose = [];
		
		// RESET THE REST
		playaToggle = true;
		isWinner = false;
		message.innerHTML = "";
		finish.classList.toggle("screen-win-one", false);
		finish.classList.toggle("screen-win-two", false);
		finish.classList.toggle("screen-win-tie", false);
		finish.style.display = "none";
		mainHeader.style.display = "block";
		userNameScreen.style.display = "block";
		randomBackgroundColor(userNameScreen, ticTacTitle);
		highlightPlaya(player1, player2);
	};
	/**********************************************************************************/
}());