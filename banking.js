
const depositBtn=document.getElementById('deposit-btn');
const depositInput=document.getElementById('deposit-input');
const depositTotal=document.getElementById('deposit-total');
const withdrawBtn=document.getElementById('withdraw-btn');
const withdrawInput=document.getElementById('withdraw-input');
const withdrawTotal=document.getElementById('withdraw-total');
const balanceTotal=document.getElementById('balance-total');

depositBtn.addEventListener('click', function(){
    if(depositInput.value==''){
        alert('Please Enter a valid Number');
    }else{
        const depositInputValue=parseInt(depositInput.value);
        depositTotal.innerText=depositInputValue;
        depositInput.value='';
        const balance=parseFloat(balanceTotal.innerText)+depositInputValue;
        balanceTotal.innerText=balance;
    }
    
});

withdrawBtn.addEventListener('click', function(){
    console.log(Number(depositTotal.innerText));
});
withdrawBtn.addEventListener('click', function(){
    if(withdrawInput.value==''){
        alert('please enter a valid number');
    }else{
        const withdrawInputValue=parseFloat(withdrawInput.value);
        withdrawTotal.innerText=withdrawInputValue;
        const withdraw= parseFloat(balanceTotal.innerText)-withdrawInputValue;
        balanceTotal.innerText=withdraw;
        withdrawInput.value='';

    }
})