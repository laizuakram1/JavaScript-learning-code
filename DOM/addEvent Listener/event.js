// event option: 1
function makeGreen(){
    document.body.style.backgroundColor = 'green';
}


//event option: 2
const yellowBtn = document.getElementById('make-yellow');
yellowBtn.onclick = makeYellow;

function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}


//event option: 3
const blueButton = document.getElementById('blue-button');
blueButton.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}



//event option: 4
const pinkButton = document.getElementById('pink-button');
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

//option: 4 another
const cyanButton = document.getElementById('cyan-button');
cyanButton.addEventListener('click', function (){
    document.body.style.backgroundColor = 'cyan';
})

//option: 4 most useable
 document.getElementById('orange-button').addEventListener('click', function (){
    document.body.style.backgroundColor = 'orange'
 })