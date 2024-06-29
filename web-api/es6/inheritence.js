
class Laptop{
    constructor(name, origin, price){
        this.name = name;
        this.origin = origin;
        this.price = price;
    }

    gaming(param){
        console.log(`this is ${param} laptop`)
    }
}

const myLaptop = new Laptop('hp', 'bangladeshi', 58);
const laptopType = myLaptop.gaming('Gaming');
// console.log(laptopType)