function remCharAt(str, pos){
    let arr = str.split('');
    arr.splice(pos, 1);
    return arr.join('');
}

function permutaciones(palabra){
    if(palabra.length == 1) return [palabra];
  
    let perm, res = [];
  
    for(let i = 0; i < palabra.length; i++){
      perm = permutaciones(remCharAt(palabra,i));
      perm = perm.map(function(v){return this+v}, palabra[i]);
      res = res.concat(perm);
    }
    
    return (res);
}

function factorial(num) {
    resultado = 1;
    for(i = num; i >= 1; i--) {resultado *= i;}
    return resultado;
}

function arrToString(palabra) {
    res = "Hay " + factorial(palabra.length) + " permutaciones\n";
    array = permutaciones(palabra);
    array.forEach(element => {
        res += (element + ', ');
    });
    return res;
}

function mostrarPermutaciones() {
    const palabra = document.getElementById('palabra');
    document.getElementById("respuesta").value = arrToString(palabra.value);
    // console.log(permutaciones(palabra.value));
}

const boton = document.getElementById("boton");
boton.onclick = mostrarPermutaciones;