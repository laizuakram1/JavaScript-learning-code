
//JSON = JavaScript Object Notation


const myShop = {
    name: 'laizu shop',
    address: {
        city: 'dhaka',
        country: 'bangladesh'
    },
    products: ['polo-tshirt', 't-shirt', 'loofer', 'watch'],
    serviceArea: 'inside of Bangladesh',
    isOpen: true,
    isNew: false,
    availableEMI: 'yes'
}

//JOSN Stringify = object to string
const jsonObject = JSON.stringify(myShop);

//JSON Parse = string(JSON data) to object
const parseData = JSON.parse(jsonObject)
console.log(parseData);