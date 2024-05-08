function tpla(){
    var ss1=Number(document.getElementById("s1").value);
    var ss2=Number(document.getElementById("s2").value);
    document.getElementById("snc").value=ss1+ss2;
}
function ckrt(){
    var ss1=Number(document.getElementById("s1").value);
    var ss2=Number(document.getElementById("s2").value);
    document.getElementById("snc").value=ss1-ss2;
}
function bl(){
    var ss1=Number(document.getElementById("s1").value);
    var ss2=Number(document.getElementById("s2").value);
    document.getElementById("snc").value=ss1/ss2;
}
function crp(){
    var ss1=Number(document.getElementById("s1").value);
    var ss2=Number(document.getElementById("s2").value);
    document.getElementById("snc").value=ss1*ss2;
}
function ort(){
    var ss1=Number(document.getElementById("s1").value);
    var ss2=Number(document.getElementById("s2").value);
    var ortlm=(ss1+ss2)/2;
    document.getElementById("snc").value=ortlm;
    if(ortlm>=50){
        alert("geçtin")
    }
    else{
        alert("kaldın")
    }
}
    
let ad=prompt("lütfen adınızı giriniz");
document.getElementById("add").value=ad;

let soyad=prompt("lütfen soy adınızı giriniz");
document.getElementById("soy").value=soyad;

