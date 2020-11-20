window.onload = function(){
    //METODO 1
    //NÃO ENTENDI

    // var bin = '10010001';
    // var dec = 0;
    
    // for (var c = 0; c < bin.length; c++) dec += Math.pow(2, c) * bin[bin.length - c - 1]; 
    
    // console.log(dec);	


    //METODO 2

    function Bin2Dec(){
        var bin = "10010101" + '';
        var verifica = bin.split('').some(char => char !== '0' && char !== '1');
        if(verifica){
            return alert("Escreva um número binário!");
        }

        var dec = parseInt(bin, 2);
        alert(bin +  " em decimal é : " + dec);
    }

    Bin2Dec();
}
