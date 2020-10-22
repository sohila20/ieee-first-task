var arr=["none","analog","digital", "embedded", "arduino", "python", "c++", "java", "front"];
function displayFirst(elmt){
  for(let i=1;i<9;i++){
    if(elmt==arr[i]){
      document.getElementById("second-choice").options[i].style.display="none";
    }
    else {
      document.getElementById("second-choice").options[i].style.display="block";
    } 
  }
}

function displaySecond(elmt){
  for(let i=1;i<9;i++){
    if(elmt==arr[i]){
      document.getElementById("first-choice").options[i].style.display="none";
    }
    else {
      document.getElementById("first-choice").options[i].style.display="block";
    }
  }
}
