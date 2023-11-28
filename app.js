let home = 0
let away = 0


function resetClicked(){
  console.log("Reset Clicked")
}

function clickHome1(){
  console.log("fool")
  home += 1
  console.log(home)

  updateHome()
}

function clickHome3(){
  console.log("fool")
  home +=3
  console.log(home)
}

function clickAway1(){
  console.log("away")
  away += 1
  console.log(away)
}

function clickAway3(){
  console.log("away")
  away += 3
  console.log(away)
}
function updateHome(){
  document.getElementById("home").innerHTML = home
  console.log("Home Updated")
}