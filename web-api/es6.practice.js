

//Need to cover this topics must

/**
 * optional chaining
 * foreach, map, find, filter, reduce
 * array of object methods
 * optional: class, inheritance, dot notation 
 * this keyword, object
*/


//practice task:

//demo data: access primary school name
let studentData = {
    id: 33,
    study: [
        {
            primary: [
                {school_name: 'abc primary school'},
                {location: 'peters burg'}
            ]
        },
        {
            secondary: [
                {school_name: 'abc secondary school'},
                {location: 'new york'}
            ]
        }

    ]
}


// task - 1
let oddNumbers = [1, 3, 5, 7, 9, 11];

// get arra element by for loop
for(let i = 0; i < oddNumbers.length; i++){
    const element = oddNumbers[i];
    // console.log(element)
}

//get array elements by map
const elements = oddNumbers.map((ele) => {
    const evenNumber = ele + 1;
    // console.log(evenNumber)
})
