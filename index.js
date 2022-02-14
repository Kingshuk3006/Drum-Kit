
for (let i = 0; i < document.querySelectorAll ('.drum').length; i++) {
  document
    .querySelectorAll ('button')[i]
    .addEventListener ('click', function () {
      //this.style.color = 'black';   //this returns the identity of the button which get clicked
      var text = this.innerText;
      makeSound (text);
      addAnimation(text);
      document.addEventListener ('keypress', function (e) {
        var keyPressed = e.key;
        makeSound (keyPressed);
        addAnimation(keyPressed);
      });
    });
  function makeSound (expression) {
    switch (expression) {
      case 'w':
        var crash = new Audio ('sounds/crash.mp3');
        crash.play ();
        break;
      case 'a':
        var kickBass = new Audio ('sounds/kick-bass.mp3');
        kickBass.play ();
        break;
      case 's':
        var snare = new Audio ('sounds/snare.mp3');
        snare.play ();
        break;
      case 'd':
        var tom1 = new Audio ('sounds/tom-1.mp3');
        tom1.play ();
        break;
      case 'j':
        var tom2 = new Audio ('sounds/tom-2.mp3');
        tom2.play ();
        break;
      case 'k':
        var tom3 = new Audio ('sounds/tom-3.mp3');
        tom3.play ();
        break;
      case 'l':
        var tom4 = new Audio ('sounds/tom-4.mp3');
        tom4.play ();
        break;
    }
  }
}
function addAnimation (operator) {
 let buttonPressed = document.querySelector ('.' + operator);
 buttonPressed.classList.add("pressed");

 setTimeout(function(){
   buttonPressed.classList.remove("pressed");
 }, 50);

}

//****query selector all returns a array having all the elements!!

// function add (num1, num2) {
//   return num1 + num2;
// }
// function substract (num1, num2) {
//   return num1 - num2;
// }
// function multiply (num1, num2) {
//   return num1 * num2;
// }
// function devide (num1, num2) {
//   return num1 / num2;
// }
// function calculator(num1, num2, operator){
//     return operator(num1, num2);
// }
//
