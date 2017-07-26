/* eslint-env browser */

var Countdown = Countdown || {};
Countdown = (function() {
  "use strict";

  var that = {},
    statusView,
    chooseLetters,
    viewLetters,
    clock,
    input,
    result;

  function onGameStarted(){
    chooseLetters.startButtonListener();
  }
  //Buchstaben werden angezeigt
  function onLetterSelected(letter){
    viewLetters.addLetter(letter);
  }

  function onNineLettersSelected(allLetters){
    chooseLetters.stopButtonListener();
    clock.start();
    input.possibleLetters(allLetters);
  }

  //Auswertung des Wortes wird gestartet
  function onTimeIsOver(){
    input.results();
  }

  //Ergebnisse werden angezeigt
  function onRightCompositionOfInput(points,hint){
    result.showResults(points,hint);
  }

  //neues Spiel wird gestartet
  function onStartNewGame(){
    result.hideResults();
    input.clearInput();
    statusView.nextGame();
    statusView.init();
    viewLetters.removeLetters();
  }

  function initMenuScreenView(){
    var menuScreen = document.querySelector(".menu-screen"),
      menuButton = document.querySelector(".start-game");
    statusView = new Countdown.StatusView(menuScreen,menuButton);
    statusView.init();
    statusView.setOnStartGameListener(onGameStarted);
  }

  function initLetterModel(){
    var vowelButton = document.querySelector(".add-vowel"),
      consonantButton =document.querySelector(".add-consonant");
    chooseLetters = new Countdown.ChooseLetters(vowelButton, consonantButton);
    chooseLetters.setLetterButtonListener(onLetterSelected);
  }

  function initLetterView(){
    var allEmptySpaces=document.querySelectorAll(".empty");
    viewLetters = new Countdown.ViewLetters(allEmptySpaces);
    viewLetters.setLetterListener(onNineLettersSelected);
  }

  function initClock(){
    var clockView = document.querySelector(".hand");
    clock= new Countdown.ClockView(clockView);
    clock.setTimeOver(onTimeIsOver);
  }

  function initInput(){
    var inputObject = document.querySelector(".word-input");
    input = new Countdown.InputController(inputObject);
    input.setProofingWordListener(onRightCompositionOfInput);
  }

  function initResultView(){
    var viewResult =document.querySelector(".results"),
      viewPoints= document.querySelector(".points"),
      viewHints = document.querySelector(".hint");
    result=new Countdown.ResultView(viewResult,viewPoints,viewHints);
    result.setNewGameListener(onStartNewGame);
  }

  function initChoosenLetters(){
    initLetterModel();
    initLetterView();
  }

  function init() {
    initMenuScreenView();
    initChoosenLetters();
    initClock();
    initInput();
    initResultView();
  }

  that.init = init;
  return that;
}());
