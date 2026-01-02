function submitted(toggle){
    console.log('toggle');
    const poppup = document.querySelectorAll('[id=submitted]');
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