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
    
    // calculateTotal 
    calculateTotal()
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
   const productNumber = parseInt(productInput.value);
   return productNumber;
}
function calculateTotal(){ 
   const phoneTotal = getInputValue('phone') * 1219;
   const caseTotal = getInputValue('case') * 59;
   const subTotal = phoneTotal + caseTotal;
//    console.log(subTotal);
  const tex = subTotal / 10 ;
  const totalPrice = subTotal + tex;
//  ubdate on the html 
document.getElementById('sub-total').innerText = subTotal;
document.getElementById('tex-amount').innerText = tex;
document.getElementById('total-price').innerText = totalPrice;



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
    updateProductNumber('case', 59, true);

})

document.getElementById('case-minus').addEventListener('click', function(){
    // console.log('minus button is clicked')
    updateProductNumber('case', 59, false);
    
})