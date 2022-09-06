let closeNav = document.getElementById('close');
let openNav = document.getElementById('open');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');


img1.addEventListener('click', function(){
   document.getElementById('main-img1').style.display = 'block';
   document.getElementById('main-img2').style.display = 'none';
   document.getElementById('main-img3').style.display = 'none';
   document.getElementById('main-img4').style.display = 'none';
})

img2.addEventListener('click', function(){
    document.getElementById('main-img1').style.display = 'none';
    document.getElementById('main-img2').style.display = 'block';
    document.getElementById('main-img3').style.display = 'none';
    document.getElementById('main-img4').style.display = 'none';
 })

 img3.addEventListener('click', function(){
    document.getElementById('main-img1').style.display = 'none';
    document.getElementById('main-img2').style.display = 'none';
    document.getElementById('main-img3').style.display = 'block';
    document.getElementById('main-img4').style.display = 'none';
 })

 img4.addEventListener('click', function(){
    document.getElementById('main-img1').style.display = 'none';
    document.getElementById('main-img2').style.display = 'none';
    document.getElementById('main-img3').style.display = 'none';
    document.getElementById('main-img4').style.display = 'block';
 })

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




