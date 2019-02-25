

document.addEventListener('keydown', ()=>{
    
    let wrapper = document.getElementById('wrapper');
    
    const key = String.fromCharCode(event.which || event.keycode).toLowerCase();
    const keyNum = event.which || event.keycode;
    const letterInput = 64 <= keyNum && keyNum <= 90; 
    
    if (letterInput){
    let letter = document.createElement('span');
    letter.setAttribute('id',`${key}`);    
    wrapper.appendChild(letter);
   
    let Body = document.createElement('div');
    Body.setAttribute('id',`${key}Body`);
    letter.appendChild(Body);
    
    let Inner = document.createElement('div');
    Inner.setAttribute('id',`${key}Inner`);
    letter.appendChild(Inner);    
    
    let Vert = document.createElement('div');
    Vert.setAttribute('id',`${key}Vert`);
    letter.appendChild(Vert);  
        
    let Horz = document.createElement('div');
    Horz.setAttribute('id',`${key}Horz`);
    letter.appendChild(Horz);  
    
    let Tail = document.createElement('div'); Tail.setAttribute('id',`${key}Tail`);
    letter.appendChild(Tail);  
    
    }
            
        
        
        //an element is created elements for a letter created inside it 
   
});
