function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    // console.log(caseNumber);
    if(isIncreasing == true){
        productNumber = parseInt( productNumber) + 1;
    }
    else if (productNumber > 0){
        productNumber = parseInt(productNumber) - 1 ;

    }
    productInput.value = productNumber;

    // update case total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
}
// phone increas decrease events
document.getElementById('phone-plus').addEventListener('click', function(){
    console.log('click phone increase');
    updateProductNumber('phone', 1229, true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
})




// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function(){
    // console.log('case plus click')
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = casseInput.value;
    // console.log(caseNumber);
    caseInput.value = parseInt( caseNumber) + 1; */
    updateProductNumber('case', 59, true);

})

document.getElementById('case-minus').addEventListener('click', function(){
    // console.log('minus button is clicked')
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value; */
    updateProductNumber('case', 59, false);
    
})