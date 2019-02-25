document.addEventListener('keydown', ()=>{
    let wrapper = document.getElementById('wrapper');
    
    const key = event.which || event.keycode;
    const letterInput = 64 <= key && key <= 90; 
    
    if (letterInput){
    let a = document.createElement('span');
    a.setAttribute('id','a');
    wrapper.appendChild(a);
    
    let aBody = document.createElement('div');
    aBody.setAttribute('id','aBody');
    a.appendChild(aBody);
    
    let aInner = document.createElement('div');
    aInner.setAttribute('id','aInner');
    a.appendChild(aInner);    
    
    let aVert = document.createElement('div');
    aVert.setAttribute('id','aVert');
    a.appendChild(aVert);  
        
    let aHorz = document.createElement('div');
    aHorz.setAttribute('id','aHorz');
    a.appendChild(aHorz);  
    
    let aTail = document.createElement('div'); aTail.setAttribute('id','aTail');
    a.appendChild(aTail);  
    }
            
        
        
        //an element is created elements for a letter created inside it 
   
});
