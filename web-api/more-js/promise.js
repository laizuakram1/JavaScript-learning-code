const displayData = new Promise((resolve, reject) =>{
    const numbers = Math.random() * 12;
    
    if(numbers < 5){
        resolve('get data successfully...')
    }
    else{
        reject('failed to load data')
    }
} )

displayData
            .then(data => console.log(data))
            .catch(err => console.log(err))