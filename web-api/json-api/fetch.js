

//get data using fetch api

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log(data))

// const url = 'https://jsonplaceholder.typicode.com/todos/1';

// getData(url);

    function getData(L){
        let url = L;

        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }

