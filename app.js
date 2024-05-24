

displayTextOnScreen('h1', 'Game of luck');
displayTextOnScreen('p', 'Choose one number between 1 and 10:');
let listNumbers = [];
let limitedNumber = 5;
let numberGerator = geratorNumber();
let attempts =1;



function displayTextOnScreen(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
    responsiveVoice.speak(text, 'US English Male', {rate:0.7});

  
}

function checkBotton( ) {
    let kick = document.querySelector('input').value ;


    if(kick== numberGerator){
        let wordAttemps = attempts>1 ? 'Attemps': 'Attemp'; 
        displayTextOnScreen('h1', `Congratulations, you got it!!! with ${attempts} ${wordAttemps}..`);
        displayTextOnScreen('p', '');
        attempts=0;
        cleanField('input');
        let button = document.getElementById('reiniciar');
        button.removeAttribute('disabled');
        let buttonKick = document.getElementById('chutar');
        // buttonKick.setAttribute('disabled', 'disabled');
        


    }   
    else{
        if(kick>numberGerator){
            displayTextOnScreen('p', `Unfortunately, not was that turn try again one number smaller that ${kick}`);
            attempts++ ;
            cleanField('input');
        }
        else{
            displayTextOnScreen('p', `Unfortunately, not was that turn try again one number bigger that ${kick}`);
            attempts++;
            cleanField('input');

        }
    }
    
        

    }
   
   


function geratorNumber (){
   let num = parseInt(Math.random() * limitedNumber +1  );
   if(limitedNumber == listNumbers.length){
    displayTextOnScreen('h1', 'Your Number of attemps it ended...');
    displayTextOnScreen('p', '');
    listNumbers=[];

   }
   if(listNumbers.includes(num)){
        console.log(num);
        return geratorNumber();


   }
   else{
    generatedNumbers(num);
    console.log(listNumbers);
    return num;

   }
    

   

}

function cleanField(field ) {
    let argField = document.querySelector(field);
    argField.value = '';
}

function restartGame( ){
    numberGerator = geratorNumber();
    console.log(numberGerator);
    displayTextOnScreen('h1', 'GAME OF LUCK ');
    displayTextOnScreen('p', 'Insert one number of between 1 and 10:');
    let button = document.getElementById('reiniciar');
    button.setAttribute('disabled', 'disabled');
    // buttonKick.removeAttribute('disabled');
    console.log(listNumbers);


}

function generatedNumbers(numero ) {
    listNumbers.push(numero);
    
}




