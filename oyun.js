const oyuncu_skor = document.getElementsByClassName("oyuncu_skor")[0];
const bilgisayar_skor = document.getElementsByClassName("bilgisayar_skor")[0];
const tas = document.getElementById("tas");
const kagit = document.getElementById("kagit");
const makas = document.getElementById("makas");
const oyuncu_secimi = document.getElementById("oyuncu_secimi");
const bilgisayar_secimi = document.getElementById("bilgisayar_secimi");
const mesaj = document.getElementsByClassName("mesaj")[0];

let oyuncu = 0;
let bilgisayar = 0;

function bilgisayarsecim() {
    const secim = ["tas", "kagit", "makas"];
    const rasgelesayi = Math.floor(Math.random() * 3);
    bilgisayar_secimi.setAttribute("src", `res/${secim[rasgelesayi]}.png`);
    return secim[rasgelesayi];
}

function eventlisteners(){

    tas.addEventListener("click",function(){

        oyuncu_secimi.setAttribute("src", `res/tas.png`);
        let bil_secim=bilgisayarsecim();
        sonuc("tas",bil_secim);
    })
    kagit.addEventListener("click",function(){

        oyuncu_secimi.setAttribute("src", `res/kagit.png`);
        let bil_secim=bilgisayarsecim();
        sonuc("kagit",bil_secim);
    })
    makas.addEventListener("click",function(){

        oyuncu_secimi.setAttribute("src", `res/makas.png`);
        let bil_secim=bilgisayarsecim();
        sonuc("makas",bil_secim);
    })
}

eventlisteners();

function sonuc(oyuncu,bilgisayar){
    switch(oyuncu+bilgisayar){

        case "tasmakas":
        case "kagittas":
        case "makaskagit":
            kazan();
            break;       
        case "taskagit":
        case "kagitmakas":
        case "makastas":
            kaybet();
            break; 
        case "tastas":
        case "kagitkagit":
        case "makasmakas": 
            berabere();
            break;        
    }
}

function kazan(){
    oyuncu=oyuncu+1;
    mesaj.innerHTML="Tebrikler Kazandın";
    oyuncu_skor.innerHTML=oyuncu.toString();
}
function kaybet(){
    bilgisayar=bilgisayar+1;
    mesaj.innerHTML="Bilgisayar Kazandı";
    bilgisayar_skor.innerHTML=bilgisayar.toString();
}
function berabere(){
    
    mesaj.innerHTML="Berabere";
    
}