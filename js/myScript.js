
function hidecover() {
    console.log("clicked!!");
    var cover = document.getElementById('cover');
    // var secondpage = document.getElementById('secondpage');

    cover.style.display = 'none';
    secondpage.style.display='block';
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
