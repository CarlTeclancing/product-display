let closeNav = document.getElementById('close');
let openNav = document.getElementById('open');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let Opencart = document.getElementById('Cart-active');
let cartShow = document.getElementById('cart-1');

let x = 0;

getName = () =>{
    setTimeout(function(){
        //alert('please enter your name!');
    }, 300)
for( var i = 0; i <= x; i++){
    setInterval( function(){
           // alert(x)
            x++;
        }, 10000);

    }
}

getName();






img1.addEventListener('click', function(){
   document.getElementById('main-img1').style.display = 'block';
   document.getElementById('main-img2').style.display = 'none';
   document.getElementById('main-img3').style.display = 'none';
   document.getElementById('main-img4').style.display = 'none';
});

img2.addEventListener('click', function(){
    document.getElementById('main-img1').style.display = 'none';
    document.getElementById('main-img2').style.display = 'block';
    document.getElementById('main-img3').style.display = 'none';
    document.getElementById('main-img4').style.display = 'none';
 });

 img3.addEventListener('click', function(){
    document.getElementById('main-img1').style.display = 'none';
    document.getElementById('main-img2').style.display = 'none';
    document.getElementById('main-img3').style.display = 'block';
    document.getElementById('main-img4').style.display = 'none';
 });

 img4.addEventListener('click', function(){
    document.getElementById('main-img1').style.display = 'none';
    document.getElementById('main-img2').style.display = 'none';
    document.getElementById('main-img3').style.display = 'none';
    document.getElementById('main-img4').style.display = 'block';
 });;;

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





