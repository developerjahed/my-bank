
const depositBtn=document.getElementById('deposit-btn');
const depositInput=document.getElementById('deposit-input');
const depositTotal=document.getElementById('deposit-total');
const withdrawBtn=document.getElementById('withdraw-btn');

depositBtn.addEventListener('click', function(){
    if(depositInput.value==''){
        alert('Please Enter a valid Number');
    }else{
        const depositInputValue=parseInt(depositInput.value);
        depositTotal.innerText=depositInputValue;
    }
    
});

withdrawBtn.addEventListener('click', function(){
    console.log(Number(depositTotal.innerText));
})