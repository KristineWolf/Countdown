/* global Countdown */

/*
 * ChooseLetters achtet auf das Klicken der beiden Buttons (vowl und consonant).
 * Wurde einer dieser Buttons geklickt, wird ein beliebiger Buchstabe über die
 * Callback-Methode specificLetter an Countdown.js zurückgegeben.
*/

Countdown.ChooseLetters = function(vowelButton, consonantButton){
  "use strict";
  var that={},
    specificLetter,
    vowel =["a","e","i","o","u",],
    consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z",];

  const VOWEL_NUM = 5,
    VOWEL ="Vowel",
    CONSONANT_NUM = 21;

  function startButtonListener(){
    vowelButton.addEventListener("click",buttonClicked,true);
    consonantButton.addEventListener("click",buttonClicked,true);
  }

  function stopButtonListener(){
    vowelButton.removeEventListener("click",buttonClicked,true);
    consonantButton.removeEventListener("click",buttonClicked,true);

  }

  function buttonClicked(event){
    var position = getRandomPosition(event.target.innerHTML),
      letter = getLetter(event.target.innerHTML,position);
    specificLetter(letter);
  }

  //gibt einen Buchstaben zurück
  function getLetter(clickedButtonText, letterPosition){
    var letter;
    if(clickedButtonText===VOWEL){
      letter=vowel[letterPosition];
    }else{
      letter=consonant[letterPosition];
    }
    return letter;
  }

  //gibt eine beliebige Position des Buchstaben im Array zurück
  function getRandomPosition(clickedButtonText){
    var numOfLetters;
    if(clickedButtonText===VOWEL){
      numOfLetters=VOWEL_NUM;
    }else{
      numOfLetters=CONSONANT_NUM;
    }
    return Math.floor(Math.random()*numOfLetters);
  }

  function setLetterButtonListener(listener){
    specificLetter=listener;
  }

  that.stopButtonListener=stopButtonListener;
  that.setLetterButtonListener=setLetterButtonListener;
  that.startButtonListener=startButtonListener;
  return that;
};
