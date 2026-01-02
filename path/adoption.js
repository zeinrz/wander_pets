function selectedPet(petId){
    var transferId = petId;
    var encodedId = encodeURIComponent(transferId);
    window.location.href = "adoption-form.html?data=" + encodedId;
}
function petFilter(word){
    const dogs = document.querySelectorAll('[id="dog"]')
    const cats =  document.querySelectorAll('[id="cat"]')
    if(word == 'dog'){
        // console.log("dog!")
        document.getElementById("dog-button").style.backgroundColor = "#e4a769";
        document.getElementById("cat-button").style.backgroundColor = "#ebc8b8";
        document.getElementById("default").style.backgroundColor = "#ebc8b8";
        dogs.forEach(function(element){
            element.style.display = "";
        });
        cats.forEach(function(element){
            element.style.display = "none";

        });
        
    }else if(word == 'cat'){
        // console.log('cat!')
        document.getElementById("dog-button").style.backgroundColor = "#ebc8b8";
        document.getElementById("cat-button").style.backgroundColor = "#e4a769";
        document.getElementById("default").style.backgroundColor = "#ebc8b8";
        dogs.forEach(function(element){
            element.style.display = "none";
        });
        cats.forEach(function(element){
            element.style.display = "";
        });
    }else{
        // console.log("all")
        document.getElementById("dog-button").style.backgroundColor = "#ebc8b8";
        document.getElementById("cat-button").style.backgroundColor = "#ebc8b8";
        document.getElementById("default").style.backgroundColor = "#e4a769";
        dogs.forEach(function(element){
            element.style.display = "";
        });
        cats.forEach(function(element){
            element.style.display = "";
        });
    }
}
function getQueryParam(name){
    const urlParams = new URLSearchParams(window.location.search);
    var receivedId = urlParams.get(name);
    petFilter(receivedId);
    console.log(receivedId);
}
getQueryParam("target")