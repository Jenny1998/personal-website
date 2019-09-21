
function hidecover() {
    // console.log("clicked!!");
    var cover = document.getElementById('cover');
    // var secondpage = document.getElementById('secondpage');

    cover.style.display = 'none';
    secondpage.style.display='block';
}


// function wave(){
//   for(let i = 0; i < 15; i++){
//     $(".dots").append($(`<div class="dot dot${i}"></div>`))

//     setTimeout(()=>{
//       setInterval(()=>{
//         $(`.dot${i}`).animate({marginTop: 200},500)
//       },1000)
//       setTimeout(()=>{
//         setInterval(()=>{
//           $(`.dot${i}`).animate({marginTop: 0},500)
//         },1000)
//       },500)
//     },i*50);
//   }
// }

$(wave2);

function wave2(){
  frozen = [];
  deltas = [];
  for(let i = 0; i < 10; i++){
    $(".dots").append($(`<div class="dot-c dot-c${i}"><div class="dot dot${i}"></div></div>`));
    frozen.push(false);
    deltas.push(0);
    $(`.dot${i}`).on("mouseenter",()=>{
      frozen[i] = true;
    });

    $(`.dot${i}`).on("click",()=>{
      disappear();
    });
    
    $(`.dot${0}`).on("click",()=>{
      raining();
    });

    $(`.dot${i}`).on("mouseleave",()=>{
      frozen[i] = false;
    });
  }
  let start = new Date().getTime();
  let lastT = 0;
  let updateDots = ()=>{
    t = (new Date().getTime())-start;
    for(let i = 0; i < 10; i++){
      if(frozen[i]){
        deltas[i] -= (t-lastT);
        if(deltas[i] < Math.PI*2*-300){
          deltas[i] += Math.PI*2*300;
        }
      } else {
        if(deltas[i]>Math.PI*2*-300 && deltas[i]<0){
          if(deltas[i] < Math.PI*2*-300/2){
            deltas[i] -= Math.PI*2;
          } else {
            deltas[i] += Math.PI*2;
          }
        }
      }


      $(`.dot${i}`).css({'background-color': `hsl(${((t+i*Math.PI*20)/20)%360}, 90%, 50%)`,top: (Math.sin((t+deltas[i]+i*Math.PI*20)/300)/2+.5)*200});
    }
    lastT = t;
    requestAnimationFrame(updateDots);
  }
  requestAnimationFrame(updateDots);
}


function disappear(){

  for(let i = 0; i < 10; i++){
  $(`.dot${i}`).animate({opacity: 0},1500); 
  $(`.dot${i}`).animate({opacity: 1},1500); 
  }
}


function slidedown() {
var element1 = document.getElementById("container1");
element1.classList.toggle('hide');
var element2 = document.getElementById("stars");
element2.classList.toggle('hide');
var element3 = document.getElementById("twinkling");
element3.classList.toggle('hide');

}

function slideup(){
var another_container = document.getElementById("container3");
another_container.classList.toggle('show');
// another_container.style.display="block";
}


jQuery.fn.center = function () {
  this.css("position","absolute");

  top = Math.max(0, (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop());
  left = Math.max(0, (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft()); 

  this.css("top", top + "px");
  this.css("left", left + "px");
  return this;
}



function raining(){

    
  
}

// function falling(){
     // document.getElementById("fallingObjects").innerHTML = "probably dead, sorry. ";
// }

// // Set the date we're counting down to
// var countDownDate = new Date("Jan 10, 1998 15:37:25").getTime();
// var d = new Date();
// d = d.toLocaleDateString("en-US");
// // document.getElementById("resume").innerHTML = "resume on "+d;
// // document.getElementById("resume2").innerHTML = "resume on "+d;

// // Update the count down every 1 second
// var x = setInterval(count,1000);

// function count() {
//   // Get todays date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = now - countDownDate;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//   var years = Math.floor(days / 365);

    
//   // Output the result in an element with id="demo"
//   document.getElementById("timertext").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds; 

//   document.getElementById("age").innerHTML = years + " y/o";

//   // If the count down is over, write some text 

//   if (years >= 100) {
//     clearInterval(x);
//     document.getElementById("timertext").innerHTML = "probably dead, sorry. ";
//   }
// }

// $(document).ready(function(){
//     $(".dot").hover(function(){
//       // $(this).css("background-color", "pink");
//       $(this).css("-webkit-animation", "riseup 2s");

//       })});

