
//Random pin generate

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function(){
    const generatePinDisplay = document.getElementById("generatePinDisplay");
    const generatePinDisplayNum =Math.round( Math.random()*9000)+1000;
    generatePinDisplay.value = generatePinDisplayNum ;
})

// Input Number Keypad   

document.getElementById("btnNine").addEventListener("click", function(){
    document.getElementById("submitPinDisplay").value  += '9';
})
document.getElementById("btnEight").addEventListener("click", function(){
    document.getElementById("submitPinDisplay").value  += '8';
})
document.getElementById("btnSeven").addEventListener("click", function(){
    document.getElementById("submitPinDisplay").value  += '7';
})
document.getElementById("btnSix").addEventListener("click", function(){
    document.getElementById("submitPinDisplay").value  += '6';
})
document.getElementById("btnFive").addEventListener("click", function(){
    document.getElementById("submitPinDisplay").value  += '5';
})
document.getElementById("btnFour").addEventListener("click", function(){
    document.getElementById("submitPinDisplay").value  += '4';
})
document.getElementById("btnThree").addEventListener("click", function(){
    document.getElementById("submitPinDisplay").value  += '3';
})
document.getElementById("btnTwo").addEventListener("click", function(){
    document.getElementById("submitPinDisplay").value  += '2';
})
document.getElementById("btnOne").addEventListener("click", function(){
    document.getElementById("submitPinDisplay").value  += '1';
})
document.getElementById("btnZero").addEventListener("click", function(){
    document.getElementById("submitPinDisplay").value  += '0';
})
document.getElementById("clear").addEventListener("click", function(){
    document.getElementById("submitPinDisplay").value  = '';
})
document.getElementById("backspace").addEventListener("click", function(){
    document.getElementById("submitPinDisplay").value  = 
    document.getElementById("submitPinDisplay").value .slice(0, -1);
})

//  submit and warning section

wrong.style.display = "none";
success.style.display = "none";
let tryLeft = document.getElementById('try-left');
let tryLeftCount = parseInt(tryLeft.innerText);
let submitInputValue = submitPinDisplay.value;

document.getElementById("submitBtn").addEventListener("click", function(){
    if(generatePinDisplay.value  == "" ){
        document.getElementById("success").style.display = "none";
       document.getElementById("wrong").style.display = "none";
    }else if (generatePinDisplay.value == submitPinDisplay.value) {
       document.getElementById("success").style.display = "block";
       document.getElementById("wrong").style.display = "none";
       if(tryLeftCount == 3){
        tryLeft.innerText = 3;
        }
    }
    else{     
        document.getElementById("success").style.display = "none";
        document.getElementById("wrong").style.display = "block";
        if(tryLeftCount == 3){
            tryLeft.innerText --;
        }
        
    }
    if( tryLeft.innerText== 0){
        submitBtn.disabled  = true;
        submitBtn.style.backgroundColor = "red";
        alert("Your Input Number Is Wrong");
    }   

    

})
