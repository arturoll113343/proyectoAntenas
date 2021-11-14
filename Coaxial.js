document.getElementById("btn_dimensiones_coaxial").onclick=function(){
    Calculo_dimensiones_coaxial();
}
document.getElementById("btn_impedancia_coaxial").onclick=function(){
    Calculo_impedancia_coaxial();
}

function Calculo_impedancia_coaxial(){
    let D_interior=Number(document.getElementById("Diametro_interior").value);
    let D_exterior=Number(document.getElementById("Diametro_exterior").value);
    var perm=document.getElementById("dielectrico");
    var permitividad_relativa;
    var z0,fc;//Variables a colocar en los inputs

    

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
    if(D_interior==null || D_interior=="" || D_exterior==null || D_exterior=="" ){
        swal("Datos faltantes!", "", "error");
        return;
    }

    z0=(138.06*Math.log10(D_exterior/D_interior))/Math.sqrt(permitividad_relativa);

    if(z0<0) swal("Datos incorrectos", "", "error");
    
    
    let a=(D_exterior+D_interior)/2;
    fc=(11.8)/(Math.sqrt(permitividad_relativa)*Math.PI*a);

    if(fc<0) swal("Datos incorrectos", "Frecuencia de corte resultante menor a 0", "error");
    

    document.getElementById("Impedancia_caracteristica_coaxial").value=z0.toPrecision(8);
    document.getElementById("Frecuencia_corte_coaxial").value=fc.toPrecision(6);

}
function Calculo_dimensiones_coaxial(){

    let z0=Number(document.getElementById("Impedancia_caracteristica_coaxial").value);
    let fc=Number(document.getElementById("Frecuencia_corte_coaxial").value);
    var perm=document.getElementById("dielectrico");
    var permitividad_relativa;
    var D,d;//Variables a colocar en los inputs  D=Diametro externo, d=Diametro interno


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
    

    if(z0==null || z0=="" || fc==null || fc=="" ){
        swal("Datos faltantes!", "", "error");
        return;
    }
    let a =(z0*Math.sqrt(permitividad_relativa))/138.06;
    let A = (2*11.8)/(Math.PI*Math.sqrt(permitividad_relativa)*fc);
    let B = (1+(10**a))**-1;
    d=A*B;

    if(d<0) swal("Datos incorrectos", "Diametro interior menor a 0", "error");

    D=d*(10**a);

    if(D<0) swal("Datos incorrectos", "Diametro exterior menor a 0", "error");

    document.getElementById("Diametro_interior").value=d.toPrecision(8);
    document.getElementById("Diametro_exterior").value=D.toPrecision(6);

}