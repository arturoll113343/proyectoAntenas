document.getElementById("btn_dimensiones_microcinta").onclick=function(){
    Calculo_dimensiones_microcinta();
}
document.getElementById("btn_impedancia_microcinta").onclick=function(){
    Calculo_impedancia_microcinta();
}
 
 function Calculo_dimensiones_microcinta(){
    //Variables para la permitividad_relativa
    var perm=document.getElementById("dielectrico");
    var permitividad_relativa;

    var H=document.getElementById("Espesor_dielectrico").value;

    //obtener frecuencias
    var f=frecuncia_medida();
    var valor=document.getElementById("frecuencia_linea").value;
    var z0=document.getElementById("Impedancia_caracteristica_microcinta").value;
    var long_elec=document.getElementById("Longitud_electrica").value;

    var Eeff,W,L; 
    var A;// variable para determinar W/H
    var WH;//Variable para guardar 
    var medida;


    //Para verificar si ingreso valores o uso el select
    if(perm.value==0 && (document.getElementById("dielectrico_in").value==null || document.getElementById("dielectrico_in").value=="" )){
        swal("Datos faltantes!", "Seleccionar dielectrico o ingresar permitividad", "error");
        return;
    }
    
    if(perm.value!=0){
        permitividad_relativa=dielectrico(perm.value);
    }else{
       permitividad_relativa=Number(document.getElementById("dielectrico_in").value);
    }
    
    
    //Verificar no esten vacios los campos
    if( H==null || H=="" || z0==null || z0=="" /*|| t==null || t=="" */|| valor==null || valor=="" || long_elec==null || long_elec==""){
        swal("Datos faltantes!", "", "error");
        return;
    }

    A= (z0/60)*Math.sqrt((permitividad_relativa+1)/2) + ((permitividad_relativa-1)/(permitividad_relativa+1))*(0.23+(0.11/permitividad_relativa));

    
    WH=(8*Math.exp(A))/(Math.exp(2*A)-2);
    W=WH*H;
    
     if(WH<0 ){
        swal("Datos erroneos!", "Ancho de la linea da como resultado un numero menor a 0", "error"); 
        return;
    }
    
    
    if((WH)<1){
        let perm_a=(permitividad_relativa+1)/2;
        let perm_b=(permitividad_relativa-1)/2;
        let perm_b1=1/(Math.sqrt( 1+12*H/W ) )+0.04*Math.pow(1-(W/H),2);
        Eeff=perm_a + perm_b*perm_b1;

       // swal("(W/H)<1 ", "", "error"); 
        

   }if((WH)>=1){
        let perm_a=(permitividad_relativa+1)/2;
        let perm_b=(permitividad_relativa-1)/2;
        Eeff=perm_a+ perm_b* (1/Math.sqrt(1+(12*H/W)));
        //swal("(W/H)>=1 ", "", "error"); 
    }

    if(document.getElementById("medida_espesor_dielectrico_y_linea").value==1){
        medida=10**3;
    }if(document.getElementById("medida_espesor_dielectrico_y_linea").value==2){
        medida=10**4;
    }  //Cambiar medidas del valor del largo de la linea para mostrar en el inputr, por default da valores en metros

    L = ((long_elec*(Math.PI/180)*3*10**8)/(2*Math.PI*f*Math.sqrt(Eeff))) * medida;
    
    if(L<0 ){
        swal("Datos erroneos!", "Valor de Largo de la linea menor a 0", "error"); 
        return;
    }
    

    document.getElementById("ancho_linea_microcinta").value=W.toPrecision(6);
    document.getElementById("Largo_linea_microcinta").value=L.toPrecision(6);
    
    
}

function Calculo_impedancia_microcinta(){
    var perm=document.getElementById("dielectrico");
    var permitividad_relativa;
    var H=document.getElementById("Espesor_dielectrico").value;
    //var t=document.getElementById("Espesor_linea").value;
    var W=document.getElementById("ancho_linea_microcinta").value;
    var L=document.getElementById("Largo_linea_microcinta").value;
    var Eeff,z0,longitudElectrica;

    //obtener frecuencias
    var f=frecuncia_medida();
    var valor=document.getElementById("frecuencia_linea").value;



    //Para verificar si ingreso valores o uso el select

    if(perm.value==0 && (document.getElementById("dielectrico_in").value==null || document.getElementById("dielectrico_in").value=="" )){
        swal("Datos faltantes!", "Seleccionar dielectrico o ingresar permitividad", "error");
        return;
    }

    if(perm.value!=0){
        permitividad_relativa=dielectrico(perm.value);
    }else{
       permitividad_relativa=Number(document.getElementById("dielectrico_in").value);
    }

    if( H==null || H=="" /*|| t==null || t==""*/ ||W==null || W=="" ||L==null || L=="" ||valor==null || valor==""){
        swal("Datos faltantes!", "", "error");
        return;
    }

  

    if(W/H<1){
        let perm_a=(permitividad_relativa+1)/2;
        let perm_b=(permitividad_relativa-1)/2;
        let perm_b1=1/(Math.sqrt( 1+12*H/W ) )+0.04*Math.pow(1-(W/H),2);
        Eeff=perm_a + perm_b*perm_b1;

        z0=  60/(Math.sqrt(Eeff))* Math.log(8*(H/W)+0.25*(W/H));
        longitudElectrica= (((L)*(2*Math.PI*f)*(Math.sqrt(Eeff)))/((Math.PI/180)*3*10**8))*10**-3; //Usando metros
      

        
        
    }
    if(W/H>=1){
        let perm_a=(permitividad_relativa+1)/2;
        let perm_b=(permitividad_relativa-1)/2;
         Eeff=perm_a+ perm_b* (1/Math.sqrt(1+(12*H/W)) ) ;

        z0= 120*Math.PI/ (Math.sqrt(Eeff))/(W/H+1.393+2/3*Math.log(W/H+1.444));
        longitudElectrica= (((L)*(2*Math.PI*f)*(Math.sqrt(Eeff)))/((Math.PI/180)*3*10**8))*10**-3; //Usando metros

       
    }
    document.getElementById("Impedancia_caracteristica_microcinta").value=z0.toPrecision(6);
    document.getElementById("Longitud_electrica").value=longitudElectrica.toPrecision(6);
}