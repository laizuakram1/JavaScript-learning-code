

//triangle 
document.getElementById('triangle-btn').addEventListener('click', () =>{
    
    //get base value
    // const baseInput = document.getElementById('base');
    // const baseValue = parseFloat(baseInput.value);
    const baseValue = getInputValue('base');

    

    //get height value
    // const heightInput = document.getElementById('height');
    // const heightValue = parseFloat(heightInput.value);
    const heightValue = getInputValue('height');


    //area set
    const area = 0.5 * baseValue * heightValue;
    setInnerText('area', area)

    

})