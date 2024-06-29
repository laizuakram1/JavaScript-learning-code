

//closure

function totalMaker(p1){
    let total = 0;

    function calculatorFn(p2){
        total = p1 + p2;
        // console.log(total)
    }

    return calculatorFn;
}

const calculateResult = totalMaker(3);
calculateResult(6);



//use specific function from bloodTest function 
function bloodTest(){
    
    return {
         cbcTest(p){
             console.log( `please give 5cc sample of blood for ${p}`);
        },
        serumCreatinine(p){
            console.log( `please give 5cc sample of blood for ${p}`);
        },
        sgptAlt(p){
            console.log( `please give 5cc sample of blood for ${p}`);
        }
    }
}

const sampleVloume = bloodTest()
sampleVloume.sgptAlt('SGPT/ALT')
