
 function frecuncia_medida(){
    var valor=document.getElementById("frecuencia_linea").value;
    var index =document.getElementById("Hertz").value;
    var num;
    if(index ==1){
         num=valor*Math.pow(10,-3);
     }if(index ==2){
         num=valor;
     }
     if(index ==3){
        num=valor*Math.pow(10,3);;
     }if(index ==4){
        num=valor*Math.pow(10,6);;
     }if(index ==5){
        num=valor*Math.pow(10,9);;
     }
     
     return num;
 }

function cambio_medida(medida){
    const div_medidas =document.querySelectorAll("div.Seleccion_lineas div div input[class ='formulario_medidas']");
    const select_medidas =document.querySelectorAll(".formulario_select_medidas");
    var index=0,length=div_medidas.length;
    var a;
                                                // Div donde se encuentran, div dentro del div, clase de los inputs
    if(medida==1){
         index=0

        for(;index<length;index++){
            if(div_medidas[index].value!=null || div_medidas[index].value!="" ){
                a=div_medidas[index].value*10;
                div_medidas[index].value=a.toPrecision(4);
            }
        }
        index=0;
        for(;index<length;index++){
                select_medidas[index].value=1;
             
        }
        
        
    
    }
    else{
        for(;index<length;index++){
            if(div_medidas[index].value!=null || div_medidas[index].value!="" ){
                a=div_medidas[index].value*.1;
                div_medidas[index].value=a.toPrecision(4);
            }
        }
        index=0;
        for(;index<length;index++){
                select_medidas[index].value=2;
             
        }
    }
}
//Listeners para cambio medida
document.getElementById("medida_espesor_dielectrico_y_linea").addEventListener('change',function(){

    var medida = document.getElementById("medida_espesor_dielectrico_y_linea").value;
    cambio_medida(medida);
    
})

document.getElementById("medida_ancho_largo_linea").addEventListener('change',function(){

    var medida = document.getElementById("medida_ancho_largo_linea").value;
    cambio_medida(medida);
    
})

document.getElementById("medida_diametro").addEventListener('change',function(){

    var medida = document.getElementById("medida_diametro").value;
    cambio_medida(medida);

})
    
document.getElementById("medida_diametros").addEventListener('change',function(){	
    var medida = document.getElementById("medida_diametros").value;
    cambio_medida(medida);
})
document.getElementById("medida_diametro_conductores").addEventListener('change',function(){	
    var medida = document.getElementById("medida_diametro_conductores").value;
    cambio_medida(medida);
})
//Listener cambio de calculadora y borrar datos inputs
 document.getElementById("tipo").addEventListener('change',function Tipo_Linea(){
    var select=document.getElementById("tipo");
    var opcion=select.value;
    var microcinta=document.getElementById("microcinta");
    var coaxial=document.getElementById("coaxial");
    var bifilar=document.getElementById("bifilar");

    var microcinta2=document.getElementById("microcinta2");
    var coaxial2=document.getElementById("coaxial2");
    var bifilar2=document.getElementById("bifilar2");

    var microcinta3=document.getElementById("microcinta3");
    var coaxial3=document.getElementById("coaxial3");
    var bifilar3=document.getElementById("bifilar3");

    var datos_obligatorios=document.getElementById("datos_obligatorios");
    var impedancia=document.getElementById("impedancias");
    var dimensiones=document.getElementById("dimensiones")

    var img_microcinta=document.getElementById("img_microcinta");
    var img_coaxial= document.getElementById("img_coaxial");
    var img_fibrilar=document.getElementById("img_fibrilar");
    
    datos_obligatorios.style.display="block";
    impedancia.style.display="block";
    dimensiones.style.display="block";
    /*alert(opcion);/*Mensaje para mostrar el valor en indice del select*/
    if(opcion==1){

        microcinta.style.display="block";
        microcinta2.style.display="block";
        microcinta3.style.display="block";
        img_microcinta.style.display="block";

        coaxial.style.display="none";
        coaxial2.style.display="none";
        coaxial3.style.display="none";
        img_coaxial.style.display="none";

        bifilar.style.display="none";
        bifilar2.style.display="none";
        bifilar3.style.display="none";
        img_fibrilar.style.display="none";

    }else if(opcion==2){
        microcinta.style.display="none";
        microcinta2.style.display="none";
        microcinta3.style.display="none";
        img_microcinta.style.display="none";

        coaxial.style.display="block";
        coaxial2.style.display="block";
        coaxial3.style.display="block";
        img_coaxial.style.display="block";

        bifilar.style.display="none";
        bifilar2.style.display="none";
        bifilar3.style.display="none";
        img_fibrilar.style.display="none";

    }else if(opcion==3){
        microcinta.style.display="none";
        microcinta2.style.display="none";
        microcinta3.style.display="none";
        img_microcinta.style.display="none";

        coaxial.style.display="none";
        coaxial2.style.display="none";
        coaxial3.style.display="none";
        img_coaxial.style.display="none";

        bifilar.style.display="block";
        bifilar2.style.display="block";
        bifilar3.style.display="block";
        img_fibrilar.style.display="block";

    }
});



