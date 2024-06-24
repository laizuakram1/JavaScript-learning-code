

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



// task- 2
const numbersArr = [22, 33, 43, 30, 59, 70, 56, 75,99];
const devisibleNumbers = numbersArr.filter((ele) =>{
    // if(ele % 10 == 0){
    //     console.log(ele)
    // }else{
    //     console.log('this are nod devisible')
    // }
   
})

const names = ['apple', 'banana', 'apple', 'lyche', 'mango', 'apple']

const fruits = names.filter((ele) =>ele.includes('lyche'));


// task-3: filter in array of object and display position

const webDevelopers = [
    {name: 'Laizu', age: 26, position: 'Junior'},
    {name: 'Nabiha', age: 6, position: 'senior'},
    {name: 'Najmin', age: 24, position: 'senior'}
]

const position = webDevelopers.filter((ele) => ele.position === 'senior' )



//task-3 : get peoples age and calculate total of age
const peoples = [
    {name: 'Afra', age: 3},
    {name: 'Laizu', age: 26},
    {name: 'najmin', age: 23},
    {name: 'nasir', age: 24}

]
const age = peoples.map((e) => e.age)
const totalAge = age.reduce((prev, current) => prev + current)
