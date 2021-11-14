document.getElementById("btn_dimensiones_bifilar").onclick=function(){
    Calculo_dimensiones_bifilar();
}
document.getElementById("btn_impedancia_bifilar").onclick=function(){
    Calculo_impedancia_bifilar();
}

function Calculo_impedancia_bifilar(){
    let D=Number(document.getElementById("Distancia_conductores").value);
    let d=Number(document.getElementById("Diametro_conductor").value);
    var perm=document.getElementById("dielectrico");
    var permitividad_relativa;
    var z0;//Variables a colocar en los inputs

    

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


    //VERIFICAR CAMPOS NO VACIOS
    if(D==null || D=="" || d==null || d=="" ){
        swal("Datos faltantes!", "", "error");
        return;
    }

    if(d>D){
        swal("Datos incongruentes","El valor del diametro del conductor(d) no puede ser mas grande que la distancia entre conductores(D)","error")
        return;
    }
    
                                                //ARCO COSENO HIPERBOLICO
    z0=(120/Math.sqrt(permitividad_relativa))*Math.acosh(D/d);

    if(z0<0){
        swal("Datos incorrectos", "", "error");
        return;
    } 
    
    
    // let a=(D_exterior+D_interior)/2;
    // fc=(11.8)/(Math.sqrt(permitividad_relativa)*Math.PI*a);

    // if(fc<0) swal("Datos incorrectos", "Frecuencia de corte resultante menor a 0", "error");
    

    document.getElementById("Impedancia_caracteristica_bifilar").value=z0.toPrecision(8);
    //document.getElementById("Frecuencia_corte_coaxial").value=fc.toPrecision(6);

}
function Calculo_dimensiones_bifilar(){

    let d=Number(document.getElementById("Diametro_conductor").value);
    let z0=Number(document.getElementById("Impedancia_caracteristica_bifilar").value);
    var perm=document.getElementById("dielectrico");
    var permitividad_relativa;
    let u0=1.256637061*10**-6;
    let e0=8.854187817*10**-12;
    var D,Zc;//Variables a colocar en los inputs  D=Distancia entre conductores, Zc=Impedancia caracteristica del aire
    

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
    

    if(z0==null || z0=="" || d==null || d=="" ){
        swal("Datos faltantes!", "", "error");
        return;
    }
    Zc=Math.sqrt(u0/e0);
   
    D=d*Math.cosh(Math.PI*(z0/Zc)*Math.sqrt(permitividad_relativa));
    if(D<0) swal("Datos incorrectos", "Distancia entre conductores menor a 0", "error");

    

    
    document.getElementById("Distancia_conductores").value=D.toPrecision(6);

}