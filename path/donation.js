function onlineDonation(toggle){
    console.log('toggle');
    const poppup = document.querySelectorAll('[id=online-donation-popup]');
    if(toggle == 1){
        poppup.forEach(function(element){
            console.log('toggle');
            element.style.display = '';
        });
    }else{
        poppup.forEach(function(element){
            element.style.display = 'none';
        });
    }
}

console.log("hello world");
function mapFunction(toggle){
    console.log('toggle');
    const poppup = document.querySelectorAll('[id=map-popup]');
    if(toggle == 1){
        poppup.forEach(function(element){
            console.log('toggle');
            element.style.display = '';
        });
    }else{
        poppup.forEach(function(element){
            element.style.display = 'none';
        });
    }
}
