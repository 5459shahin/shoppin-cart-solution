function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    // console.log(caseNumber);
    if(isIncreasing == true){
        caseNumber = parseInt( caseNumber) + 1;
    }
    else if (caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1 ;

    }
    caseInput.value = caseNumber;

    // update case total 
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
}


document.getElementById('case-plus').addEventListener('click', function(){
    // console.log('case plus click')
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = casseInput.value;
    // console.log(caseNumber);
    caseInput.value = parseInt( caseNumber) + 1; */
    updateCaseNumber(true);

})

document.getElementById('case-minus').addEventListener('click', function(){
    // console.log('minus button is clicked')
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value; */
    updateCaseNumber(false);
    
})