function playPause() {
    let myVid= document.getElementById("video1");
    if (myVid.paused)
    myVid.play();
      else
    myVid.pause();

}

let myCount = 1;
function book() {
  
  let x = document.getElementById("count").innerText = myCount;
  count = myCount++;

}

let clicks = 1;
let fullBook = 40;
 
function booked() {

  entries.innerText += " " + count;
  
  let y = document.getElementById("count").value;

  if (count < 40) {
    alert("More seats available");
    return false;
  }

  else {
    clicks --;
    if (clicks == 0) {
      alert("Tickets fully booked!")
      document.getElementById("sav").disabled = true;
      document.getElementById("ticket").disabled = true;
      
      return false
    }
  }
}


function info() {
  document.getElementById("myModal").style.display = "block";
 }
 
 function info1() {
  document.getElementById("myModal1").style.display = "block";
 }

 function info2() {
  document.getElementById("myModal2").style.display = "block";
 }

 
 function info3() {
  document.getElementById("myModal3").style.display = "block";
 }

 function info4() {
  document.getElementById("myModal4").style.display = "block";
 }

 
 function info5() {
  document.getElementById("myModal5").style.display = "block";
 }

 
 function info6() {
  document.getElementById("myModal6").style.display = "block";
 }

 
 function info7() {
  document.getElementById("myModal7").style.display = "block";
 }

 
 function info8() {
  document.getElementById("myModal8").style.display = "block";
 }

 
 function info9() {
  document.getElementById("myModal9").style.display = "block";
 }

 
 function info10() {
  document.getElementById("myModal10").style.display = "block";
 }

 
 function info11() {
  document.getElementById("myModal11").style.display = "block";
 }

function trial() {
  alert("Movie booked!");
  document.getElementById("myModal").style.display = "none";
}



function trial1() {
  alert("Ticket booked!");
  document.getElementById("myModal1").style.display = "none";
}

function trial2() {
  alert("Ticket booked!");
  document.getElementById("myModal2").style.display = "none";
}


function trial3() {
  alert("Ticket booked!");
  document.getElementById("myModal3").style.display = "none";
}


function trial4() {
  alert("Ticket booked!");
  document.getElementById("myModal4").style.display = "none";
}


function trial5() {
  alert("Ticket booked!");
  document.getElementById("myModal5").style.display = "none";
}


function trial6() {
  alert("Ticket booked!");
  document.getElementById("myModal6").style.display = "none";
}


function trial7() {
  alert("Ticket booked!");
  document.getElementById("myModal7").style.display = "none";
}


function trial8() {
  alert("Ticket booked!");
  document.getElementById("myModal8").style.display = "none";
}


function trial9() {
  alert("Ticket booked!");
  document.getElementById("myModal9").style.display = "none";
}


function trial10() {
  alert("Ticket booked!");
  document.getElementById("myModal10").style.display = "none";
}


function trial11() {
  alert("Ticket booked!");
  document.getElementById("myModal11").style.display = "none";
}

function review() {
window.location ="reviews.html";
}

function send() {
  alert("Your message has been sent to Dream Cinemas! Thanks for contacting us.");
}


function ignore() {
  document.getElementById("myModal").style.display ="none";
}


function ignore1() {
  document.getElementById("myModal1").style.display ="none";
}


function ignore2() {
  document.getElementById("myModal2").style.display ="none";
}


function ignore3() {
  document.getElementById("myModal3").style.display ="none";
}


function ignore4() {
  document.getElementById("myModal4").style.display ="none";
}


function ignore5() {
  document.getElementById("myModal5").style.display ="none";
}


function ignore6() {
  document.getElementById("myModal6").style.display ="none";
}


function ignore7() {
  document.getElementById("myModal7").style.display ="none";
}


function ignore8() {
  document.getElementById("myModal8").style.display ="none";
}


function ignore9() {
  document.getElementById("myModal9").style.display ="none";
}


function ignore10() {
  document.getElementById("myModal10").style.display ="none";
}


function ignore11() {
  document.getElementById("myModal11").style.display ="none";
}
