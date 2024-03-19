
// It works well with changeable backgroundcolor
/*Easter egg one*/ 

const titleElement = document.getElementById("title");

const backGroundColor = [
    'lightblue',
    'lightyellow',
    '#ffb6c1',
    '#8fbc8f',
    'rgb(231, 229, 229)'
];

let imageIndex = 0;

titleElement.addEventListener('click', function() {
    document.querySelector('.main-content').style.backgroundColor = backGroundColor[imageIndex];
    imageIndex = (imageIndex + 1) % backGroundColor.length;
});


/*Easter egg two*/ 

const surpriseModule = document.getElementById('surpriseModule');

const closeIcon = document.getElementById('close-icon');

let input = [];
window.addEventListener('keyup', function(e) {
    input.push(e.key);

    if (input.length === 4) {
        const sequence = input.join('');
        if (sequence === '0331') {
            showModule();
        }
        input.length = 0;
    }
});

function showModule() {
    surpriseModule.style.display = 'block';
};

closeIcon.addEventListener('click', function () {
    surpriseModule.style.display = 'none';
});


/*---------------for portfolio page-------*/ 
// const musicPic = document.querySelector("#music-pic1");

// musicPic.addEventListener("click", function () {
//     musicPic.src = "images/Portfolio/SDI Music.png";
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const bankPic = document.querySelector("#bank-pic1");

//     bankPic.addEventListener("click", function () {
//         bankPic.src = "images/Portfolio/SDI Bank.png";
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     const ballPic = document.querySelector("#ball-pic1");

//     ballPic.addEventListener("click", function () {
//         ballPic.src = "images/Portfolio/SDI Bank.png";
//     });
// });





/* try 1*/



// const backGroundImage = 'url(images/EasterEgg/Firework.png)';

// titleElement.addEventListener('click', function() {
//     document.querySelector('.main-content').style.backgroundImage = backGroundImage;
// });





/* try 2*/

// const backgroundImage = [
//     'url(images/EasterEgg/Firework.png)',
//     'url(images/EasterEgg/EasterEgg1.png)',
//     'url(images/EasterEgg/EasterEgg2.png)'
// ];

// let imageIndex = 0;

// titleElement.addEventListener('click', function() {
//     document.body.style.backgroundImage = backgroundImage[imageIndex];

//     imageIndex = (imageIndex + 1) % backgroundImage.length;

// });








// const header = document.querySelector("#header");
// header.style.color = "blue";

// const title = document.getElementById("title");
// title.style.color = "green";





// const background = document.querySelector("div");
// background.style.backgroundColor = "orange";
