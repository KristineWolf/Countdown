/* global Countdown */

/*
 * ViewLetters zeigt die Buchstaben im HTML-Dokument an.
*/

Countdown.ViewLetters = function(allEmptySpaces){
  "use strict";
  var that={},
    nineLetters,
    allLetters=[];
  const POSSIBLE_SPACES = 9,
    EMPTY=0;

  function addLetter(letter){
    fillArray(letter);
    showLetter(letter);
  }

  //hat das Array die Länge 9 erreicht, wird eine Callback-Methode aufgerufen, die
  //die Listener der Buttons entfernt und das ablaufen der Uhr startet
  function fillArray(letter){
    if(allLetters.length<=POSSIBLE_SPACES){
      allLetters.push(letter);
    }
    if(allLetters.length===POSSIBLE_SPACES){
      nineLetters(allLetters);
    }
  }

  function showLetter(letter){
    for(let space of allEmptySpaces){
      if(space.classList.contains("empty")){
        space.innerHTML=letter;
        space.classList.remove("empty");
        break;
      }
    }
  }

  function setLetterListener(listener){
    nineLetters=listener;
  }

  //ermöglicht ein neues Spiel
  function removeLetters(){
    allLetters.length=EMPTY;
    for(let space of allEmptySpaces){
      space.innerHTML="";
      space.classList.add("empty");
    }
  }

  that.removeLetters=removeLetters;
  that.setLetterListener=setLetterListener;
  that.addLetter=addLetter;
  return that;
};
