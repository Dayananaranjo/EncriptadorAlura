const inputText = document.querySelector(".input-text")
const mensaje = document.querySelector(".input-text-area")

function btnencriptar() {
    const textoEncriptado = Encriptar (inputText.value);
    mensaje.value = textoEncriptado;

}

function Encriptar(StringParaEncriptar){
    let matrizCodigo = [["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]]

    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i= 0; i< matrizCodigo.length; i++){
    if(StringParaEncriptar.includes(matrizCodigo[i][0])){
        
        
        StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])

    }
}

return StringParaEncriptar;
}



function btnDesencriptar() {
    const textoDesncriptado = Desencriptar (inputText.value);
    mensaje.value = textoDesncriptado;
}

function Desencriptar(String){
    let Desencriptar = String.toLowerCase()
    for (let i = 0; i < Desencriptar.length; i++) {
        Desencriptar = Desencriptar.replace("ai", "a")
        Desencriptar = Desencriptar.replace("enter", "e")
        Desencriptar = Desencriptar.replace("imes", "i")
        Desencriptar = Desencriptar.replace("ober", "o")
        Desencriptar = Desencriptar.replace("ufat", "u")
    }

    return Desencriptar
}
    