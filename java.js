function Start(){
    var element = document.querySelector('.input-grader')
    element.style.backgroundColor = '#FFFF66'
    var element = document.querySelector('.input-fugt')
    element.style.backgroundColor = '#FFFF66'
    

    
}
function sommer(){
    var element = document.querySelector('.input-grader')
    element.style.backgroundColor = '#000ff'
    


}


function udregnPris() {
    var element = document.querySelector('.box')
    element.style.backgroundColor = '#4ae244'
    
    var inputfelt = document.querySelector('.prisFelt')
    var pris = inputfelt.value * 20
    
    var resultat = document.querySelector('.boxText')
    resultat.innerHTML = pris

}
    