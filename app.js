let closeNav = document.getElementById('close');
let openNav = document.getElementById('open');


closeNav.addEventListener('click', function(){
    
    
    let timeIn = setTimeout(function(){
        document.getElementById('resp').style.display = 'none';
        document.getElementById('ul').style.width = '0%';
        document.getElementById('ul').style.transition = '300';
    }, 200)
});

openNav.addEventListener('click', function(){

    let timeIn = setTimeout(function(){
        document.getElementById('resp').style.display = 'flex';
        document.getElementById('ul').style.width = '60%';
        document.getElementById('ul').style.transition = '300';
    }, 200)
    

});
