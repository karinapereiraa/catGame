var life = document.querySelector(".scoreLife");
var scoreLife = parseFloat(life.textContent);
console.log("vida é igual a "+ scoreLife);

const cat = document.querySelector('.cat') //igual no css
const dog3 = document.querySelector('.dog3')
const dog4 = document.querySelector('.dog4')
const dog5 = document.querySelector('.dog5')
const witch = document.querySelector('.witch')
const bird = document.querySelector('.bird')
const mouse = document.querySelector('.mouse')
const mouse2 = document.querySelector('.mouse2')


const jump = () => {  //aperta tecla, pula
    cat.classList.add('jump');
    setTimeout(() => {
        cat.classList.remove('jump'); 
    }, 500);  //ms
}

var aux = 5;

const loop7 = setInterval(() =>{
    const mouse2Position = mouse2.offsetLeft; //posição 
    const cat7Position = +window.getComputedStyle(cat).bottom.replace('px','');
    //console.log(mouse2Position)
   
   if (mouse2Position <= 200 && mouse2Position > 0 && cat7Position <= -10){
        aux++;
       //clearInterval(loop);
        life.textContent = aux;
        //mouse2.style.animation = 'none';
        // mouse2.style.left = `${mouse2Position}px`;       
    } 
}, 200)  //funcao anonima,tempo

const loop6 = setInterval(() =>{
    const mousePosition = mouse.offsetLeft; //posição 
    const cat6Position = +window.getComputedStyle(cat).bottom.replace('px','');
    //console.log(mousePosition)
   
   if (mousePosition <= 200 && mousePosition > 0 && cat6Position  <= -10){
        aux++;
       //clearInterval(loop);
        life.textContent = aux;
        //mouse.style.animation = 'none';
        //mouse.style.left = `${mousePosition}px`;       
    } 
}, 200)  //funcao anonima,tempo

const loop5 = setInterval(() =>{
    const birdPosition = bird.offsetLeft; //posição 
    const cat5Position = +window.getComputedStyle(cat).bottom.replace('px','');
    //console.log(birdPosition)
   
   if (birdPosition <= 200 && birdPosition > 0 && cat5Position > 75){
        aux++;
       //clearInterval(loop);
        life.textContent = aux;
       // dog3.style.animation = 'none';
      //  dog3.style.left = `${dog3Position}px`;       
    } 
}, 200)  //funcao anonima,tempo

const loop4 = setInterval(() =>{
    const witchPosition = witch.offsetLeft; //posição 
    const cat4Position = +window.getComputedStyle(cat).bottom.replace('px','');
    //console.log(witchPosition)
   
   if (witchPosition <= 200 && witchPosition > 0 && cat4Position > 50){
        aux--;
       //clearInterval(loop);
        life.textContent = aux;
       // dog3.style.animation = 'none';
      //  dog3.style.left = `${dog3Position}px`;      
    } 
}, 200)  //funcao anonima,tempo

const loop = setInterval(() =>{
    const dog3Position = dog3.offsetLeft; //posição 
    const catPosition = +window.getComputedStyle(cat).bottom.replace('px','');
    //console.log(catPosition)
   
   if (dog3Position <= 120 && dog3Position > 0 && catPosition < 75){
        aux--;
       //clearInterval(loop);
        life.textContent = aux;
       // dog3.style.animation = 'none';
      //  dog3.style.left = `${dog3Position}px`;      
    } 
}, 500)  //funcao anonima,tempo


const loop2 = setInterval(() =>{
     const dog4Position = dog4.offsetLeft; //posição 
     const cat2Position = +window.getComputedStyle(cat).bottom.replace('px','');
    // console.log(dog4Position) //ver posição do cano

    if (dog4Position <= 80 && dog4Position >0 && cat2Position < 100){
        aux--;
       //clearInterval(loop);
        life.textContent = aux;     
      //  dog4.style.animation = 'none';
        //dog4.style.left = `${dog4Position}px` 
    }
}, 100)


const loop3 = setInterval(() =>{
    const dog5Position = dog5.offsetLeft; //posição 
    const cat3Position = +window.getComputedStyle(cat).bottom.replace('px','');
    //console.log(dog5Position) //ver posição do cano

   if (dog5Position <= 200 && dog5Position >0 && cat3Position < 50){
       aux--;
      //clearInterval(loop);
       life.textContent = aux;     
       //dog5.style.animation = 'none';
       //dog5.style.left = `${dog5Position}px` 
   }
}, 100)




document.addEventListener('keydown', jump);