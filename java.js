


var menu_state
menu_state = false 

function expandLeft() {
    if(menu_state === false) {
        document.getElementById("leftmenu").style.left = "0px";
        menu_state = true; 
        console.log(menu_state)
    } else if(menu_state === true) {
        document.getElementById("leftmenu").style.left = "-180px"
        menu_state = false;
        console.log(menu_state) 
    }
}

//var rightmenu 
// rightmenu = false 

//function expandRight(){
  //  if(rightmenu === false) {
    //    document.getElementsByClassName("rightmenu").style.left = "92.5%";
      //  rightmenu = true; 
        //console.log(menu_state)
    //} else if(rightmenu === true) {
      //  document.getElementsByClassName("rightmenu").style.left = "97%"
        //rightmenu = false;
        //console.log(rightmenu) 
//}
//}

