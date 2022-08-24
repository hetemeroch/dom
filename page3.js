var plus1 = document.getElementById('plus1');
var moins1 = document.getElementById('moins1');
var input1 = document.getElementById('input1');
var total = document.getElementById('total');

plus1.addEventListener('click', function(){
    var resultat1 = parseInt(input1.value);
        resultat1 = resultat1 +1;
        input1.value = resultat1; 
        total.value = 3500*resultat1;
})

moins1.addEventListener('click', function(){
    var resultat1 = parseInt(input1.value)
        if(resultat1 === 0 ) {
            input1.value = resultat1;
        } else {
            resultat1 = resultat1 -1;
            input1.value = resultat1;
            total.value = total.value - 3500;
            
        }
})


var plus2 = document.getElementById('plus2');
var moins2 = document.getElementById('moins2');
var input2 = document.getElementById('input2');

plus2.addEventListener('click', function(){
    var resultat2 = parseInt(input2.value);
        resultat2 = resultat2 +1;
        input2.value = resultat2;
        
        
})

moins2.addEventListener('click', function(){
    var resultat2 = parseInt(input2.value)
        if(resultat2 === 0 ) {
            input2.value = resultat2;
        } else {
            resultat2 = resultat2 -1;
            input2.value = resultat2;
           
        }
})


var plus3 = document.getElementById('plus3');
var moins3 = document.getElementById('moins3');
var input3 = document.getElementById('input3');

plus3.addEventListener('click', function(){
    var resultat3 = parseInt(input3.value);
        resultat3 = resultat3 +1;
        input3.value = resultat3; 
        
})

moins3.addEventListener('click', function(){
    var resultat3 = parseInt(input3.value)
        if(resultat3 === 0 ) {
            input3.value = resultat3;
        } else {
            resultat3 = resultat3 -1;
            input3.value = resultat3;
            
        }
})

