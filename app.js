let home = 0
let away = 0


function resetClicked(){
  console.log("Reset Clicked")
  home = 0
  away = 0
  updateAway()
  updateHome() 
}

function clickHome1(){
  console.log("fool")
  home += 1
  console.log(home)

  updateHome()
  alert()
}

function clickHome3(){
  console.log("gross")
  home +=3
  console.log(home)
  updateHome()
  alert()
}

function clickAway1(){
  console.log("no away")
  away += 1
  console.log(away)
  updateAway()
  alert()
}

function clickAway3(){
  //update away score +3
  //add score to the board
  console.log("yay")
  away += 3
  console.log(away)
  updateAway()
  alert()
}

function updateHome(){
  
  document.getElementById("home").innerText = home
  //add the new scores to the board 
  console.log("Score Updated")
}

function updateAway(){
  document.getElementById("away").innerText = away
  console.log("Score Updated")
}

function alert(){
  if(home >= 10 ){
    console.log("home wins")
    window.alert("home wins!")
  } else (away >= 10); {
    window.alert("away wins!")
}
} 

