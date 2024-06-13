
//get card name and set selected list
function setList(selectedListId, productNameId){
    //selected list 
    const selectedList = document.getElementById(selectedListId);
    const serial = selectedList.childElementCount;

    //get product name
    const productNameText = document.getElementById(productNameId);
    const productName = productNameText.innerText;

    //create p element for append selected list
    const p = document.createElement('p');
    p.innerText = `${serial + 1}. ${productName}`
    selectedList.appendChild(p);


}

//set price
function setPrice(productPriceId, totalPriceId, discountId, totalId){

    //product price
    const productPriceText = document.getElementById(productPriceId);
    const price = parseFloat(productPriceText.innerText);

    //total
    const totalText = document.getElementById(totalId);
     
     
    //total price get and set
    const totalPriceText = document.getElementById(totalPriceId);
    const priceTotal = parseFloat(totalPriceText.innerText);

    const totalPrice = price + priceTotal;
    totalPriceText.innerText = totalPrice.toFixed(2);
    totalText.innerText = totalPrice.toFixed(2);
    

    //discount price get and set 
    const discountPriceText = document.getElementById(discountId);
    const discountAmount = totalPrice / 100 * 10;

    if(totalPrice > 200 ){
        discountPriceText.innerText = discountAmount.toFixed(2);
        totalText.innerText = totalPrice - discountAmount;

    }

    

    

    

    



    
    
   
    



}

