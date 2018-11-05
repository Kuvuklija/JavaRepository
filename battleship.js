var random=Math.floor(Math.random()*5);
var location1=random;
var location2=location1+1;
var location3=location2+1;

var guessCurrent;
var hit=0;
var guessTotal=0;

var isSunk=false;

var sunkLocation;

while(isSunk==false){
    guessCurrent=prompt("Ready, aim,fire! (enter a number 0-6):");
    if(guessCurrent<0 || guessCurrent>6){
      alert("Please enter a valid cell number!");
    }else{
        guessTotal+=1;
 
        if(guessCurrent==location1 || guessCurrent==location2 || guessCurrent==location3){
          
            if(guessCurrent!=sunkLocation){
                sunkLocation=guessCurrent;
                hit+=1;
                alert("Hit!");
            } else {
                alert("This location already hited!");
            }
        } else {
            alert("Miss!");
        }
    
        if(hit==3){
            isSunk=true;
            alert("You sunk my battleship!");
        }
    }
}

var stats="You took "+guessTotal+ " guesses to sunk the batlleship, "+
          "which means your shooting accuracy was "+(3/guessTotal);
alert(stats);

