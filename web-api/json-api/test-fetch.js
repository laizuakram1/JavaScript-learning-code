

//get data with fetch

function loadData(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))
}


//display data
function displayData(data){
    // console.log(data);
}