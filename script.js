// let box = document.querySelector(".bx")
// let navigation = document.querySelector(".navigation")

// box.addEventListener("click",()=>{
//     navigation.classList.toggle("active")
//     if()

// })

let  box = document.getElementById("box")
let navigation = document.getElementById("navigation")
document.onclick = function(e){
if(e.target.id !== "box" && e.target.id !== "navigation"){
    navigation.classList.remove("active")
}
}
 box.onclick = function(){
    navigation.classList.toggle("active")
 }