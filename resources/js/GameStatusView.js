/* global Countdown */

/*
 * StatusView ermöglicht es, ein Spiel zu starten und ein neues
 * zu beginnen.
*/

Countdown.StatusView = function(menuScreen, menuButton){
  "use strict";
  var that = {},
    startGame;
  const GAME_DESCRIPTION = "Bilde ein Wort aus den neun zur Verfügung stehenden Buchstaben.\nJe mehr Buchstaben du verwendest, desto mehr Punkte kannst du erreichen.\n Um das Spiel zu starten, klicke je nach Bedarf auf die Buttons,\ndie entweder einen willkürlichen Vokal oder einen Konsonanten erscheinen lassen.";

  function init(){
    menuButton.addEventListener("click",start,true);
  }

  //nach Klicken des Buttons wird das Spiel gestartet und die Callback-Methode
  //in Countdown.js wird aufgerufen
  function start(){
    menuScreen.classList.add("hidden");
    alert(GAME_DESCRIPTION); // eslint-disable-line no-alert
    menuButton.removeEventListener("click",start,true);
    startGame();
  }

  function setOnStartGameListener(listener){
    startGame=listener;
  }

  //neues Spiel
  function nextGame(){
    menuScreen.classList.remove("hidden");
  }

  that.nextGame=nextGame;
  that.setOnStartGameListener=setOnStartGameListener;
  that.init = init;
  return that;
};
