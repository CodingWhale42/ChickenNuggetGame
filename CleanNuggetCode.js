var i = 0;
var txt = 'This is a Chicken Nugget.                     Click it.';
var speed = 40; 
var isTextDone = false;
var nuggetClicks = 0;
var sellNuggetClicks = 0;
var dinoCoins = 0;


//Write out text in beginning of game
function typeWriter() {
    document.getElementById("start").hidden = true;
    document.getElementById("nuggetPicture").hidden = false;
  if (i < txt.length) {
    document.getElementById("writeOutText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  isTextDone = true;
}

// when Chicken Nugget Picture is clicked
function getChickenNuggets() {
    if(isTextDone == true){
        //hides the typing text and displays the You Have ... Chicken Nuggets
        document.getElementById("nuggetPicture").disabled = false;
        document.getElementById("writeOutText").hidden = true;
        document.getElementById("nuggets").hidden = false;
        //Increase Nugget clicks by 1 every time chicken nugget picture
            nuggetClicks += 1;
            document.getElementById("nuggetClicks").innerHTML = nuggetClicks;
            //Displaying Sell Button After Reaching 100 Nuggets
        if(nuggetClicks == 40){
            displaySellButton();
        }
    }   
}

function displaySellButton(){ 
    document.getElementById("sellNuggets").hidden = false;
    document.getElementById("dinoCoinText").hidden = false;
}

function sellNuggets(){
    if (nuggetClicks > 0){
        nuggetClicks --;
        document.getElementById("nuggetClicks").innerHTML = nuggetClicks;
        sellNuggetClicks ++;
        dinoCoins = sellNuggetClicks * 2;
        document.getElementById("dinoCoins").innerHTML = dinoCoins;
    }
}