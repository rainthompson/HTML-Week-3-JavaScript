function FtoC() {
    let DegF = document.getElementById("txtDegF");
    let DegC = document.getElementById("divDegC");
    let num = (DegF.value - 32 * 5 / 9);
    DegC.innerHTML = num;
    document.body.style.backgroundColor = getColor(num);
}

function CtoF() {
    let DegC = document.getElementById("txtDegC");
    let DegF = document.getElementById("divDegF");
    let num = (DegC.value * 9 / 5 + 32);
    DegF.innerHTML = num;
    document.body.style.backgroundColor = getColor(num);
}

function getColor(fahr) {
    let color;
    if (fahr <= 32) {
        color = 'blue'
    } else if (fahr > 32 && fahr < 88) {
        color = 'yellow'
    } else {
        color = 'pink'
    }
    return color;
}
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('txtDegC').onkeydown = function(event){
        if(event.keyCode == 13){
            CtoF()
        }
    }
   Btn.addEventListener("click", CtoF)
});