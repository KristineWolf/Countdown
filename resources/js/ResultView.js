/* global Countdown */

/*
 * ResultView zeigt das Ergebnis und die Punkte an.
*/

Countdown.ResultView = function (viewResult,viewPoints,viewHints){
  "use strict";
  var that={},
    newGame;
  const THREE_SECONDS = 3000;

  function showResults(points, hint){
    viewResult.classList.remove("hidden");
    viewPoints.innerHTML=points;
    viewHints.innerHTML=hint;
    setTimeout(function(){newGame();}, THREE_SECONDS);
  }

  function setNewGameListener(listener){
    newGame=listener;
  }

  //ermöglicht neues Spiel
  function hideResults(){
    viewResult.classList.add("hidden");
  }

  that.hideResults=hideResults;
  that.showResults=showResults;
  that.setNewGameListener=setNewGameListener;
  return that;
};
