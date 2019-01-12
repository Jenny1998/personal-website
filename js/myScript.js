
function hidecover() {
    console.log("clicked!!");
    var cover = document.getElementById('cover');
    // var secondpage = document.getElementById('secondpage');

    cover.style.display = 'none';
    secondpage.style.display='block';
}



function slidedown() {
var element = document.getElementById("container1");
element.classList.toggle('hide');
}

function slideup(){
var another_container = document.getElementById("container2");
another_container.classList.toggle('show');
// another_container.style.display="block";
}
