function dielectrico(index){
    if(index ==1){
        return 5;
    }if(index ==2){
        return 2.2;
    }if(index ==3){
        return 3.8;
    }if(index ==4){
        return 6.4;
    }if(index ==5){
        return 4.4;
    }if(index ==6){
        return 2.5;
    }if(index ==7){
        return 5.4;
    }if(index ==8){
        return 3.2;
    }if(index ==9){
        return 3.5;
    }if(index ==10){
        return 3.4;
    }if(index ==11){
        return 2.56;
    }if(index ==12){
        return 2.26;
    }if(index ==13){
        return 2.25;
    }if(index ==14){
        return 6;
    }if(index ==15){
        return 4;
    }if(index ==16){
        return 2.1;
    }

 }

var input_dielectrico=document.getElementById("dielectrico_in");
input_dielectrico.addEventListener('input', function (){

    //document.getElementById("Espesor_dielectrico").value=Number(document.getElementById("Espesor_dielectrico").value)+2;
    document.getElementById("dielectrico").selectedIndex=0;
});


function quitar_input(){
    document.getElementById("dielectrico_in").value =""; 
}