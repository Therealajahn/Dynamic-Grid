
let progress = 0;


function animate(){
    let now = performance.now();
    progress = now / 2000;
    let destination1 = 90;
    let destination2 = -20;
    let start2 = 80;
    let midRight = `${progress * destination1}px`;
    let midLeft = `${start2 +(progress * destination2)}px`;
    
    wrapper.style.gridTemplateColumns = ` 80px ${midLeft} ${midRight} 80px`;
    
    if(progress < 1){
    requestAnimationFrame(animate);
    };
    
    console.log(midRight);
//    console.log(aVertical.style.width);
};
requestAnimationFrame(animate);
let lowerCase = {};

let wrapper = document.getElementById('wrapper');

wrapper.style.width = "400px";
wrapper.style.height = "400px";
wrapper.style.display = "grid";
wrapper.style.border = "solid 5px #fff";   
wrapper.style.gridTemplateColumns = 'repeat(5,80px)';
wrapper.style.gridTemplateRows = "16.6% 16.6% 16.6% 16.6% 16.6%";



lowerCase.aBody = document.createElement("div");
lowerCase.aBody.setAttribute('id', "aBody")
lowerCase.aBody.style.backgroundColor = "#F62509";
lowerCase.aBody.style.gridArea = "1/1/6/6";
wrapper.appendChild(lowerCase.aBody);

lowerCase.aVertical = document.createElement("div");
lowerCase.aVertical.setAttribute('id', "aVertical")
lowerCase.aVertical.style.backgroundColor = "#000";
lowerCase.aVertical.style.gridArea = "1/3/6/4";
wrapper.appendChild(lowerCase.aVertical);
    
lowerCase.aHorizontal = document.createElement("div");
lowerCase.aHorizontal.setAttribute('id', "aHorizontal")
lowerCase.aHorizontal.style.backgroundColor = "#000";
lowerCase.aHorizontal.style.gridArea = "3/1/3/6"
wrapper.appendChild(lowerCase.aHorizontal);

lowerCase.aInner = document.createElement("div");
lowerCase.aInner.setAttribute('id', "aInner")
lowerCase.aInner.style.backgroundColor = "#000";
lowerCase.aInner.style.gridArea = "2/2/5/5"
wrapper.appendChild(lowerCase.aInner);

lowerCase.aTail = document.createElement("div");
lowerCase.aTail.setAttribute('id', "aTail")
lowerCase.aTail.style.backgroundColor = "#E46F1B";
lowerCase.aTail.style.gridArea = "6/5/7/6"
wrapper.appendChild(lowerCase.aTail);
 
