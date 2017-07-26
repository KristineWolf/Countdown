/* global Countdown */

/*
 * ClockView kümmert sich um die Animation der Countdown-Uhr.
*/

Countdown.ClockView = function(clock){
  "use strict";
  var that={},
    checkInput;
  const THIRTY_SECONDS = 30000,
    ANIMATION_DURATION= "30s";

  //Uhrzeiger dreht sich in 30s um 360°
  function start(){
    clock.classList.add("hand-animated");
    clock.style.animationDuration = ANIMATION_DURATION;
    setTimeout(function(){stop();}, THIRTY_SECONDS);
  }

  function stop(){
    clock.classList.remove("hand-animated");
    checkInput();
  }

  function setTimeOver(listener){
    checkInput = listener;
  }

  that.setTimeOver=setTimeOver;
  that.start=start;
  return that;
};
