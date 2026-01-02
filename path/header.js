function barFunction() {
    var open = document.getElementById("menu");
    var userWidth = window.innerWidth
    if (userWidth <= 768){
        if (open.style.display === "block") {
            open.style.display = "none";
        } else {
            open.style.display = "block";
        }
    } else {
        open.style.display = "block";
    }
}
function barChecker() {
    var open = document.getElementById("menu");
    var userWidth = window.innerWidth
    if (userWidth <= 768){
        open.style.display = "none";
    } else {
    open.style.display = "block";
  }
}
window.addEventListener('resize', barChecker);