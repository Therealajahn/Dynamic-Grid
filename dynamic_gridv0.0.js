/* What I want:
 * ability to specify number of grids to be generated
 * specify columns and rows for each 
 * specify areas for each 
 * ability to have divs the appear to move independently but
 * don't overlap(each independent part grid will have
 * to be its own grid)
 * POSSIBLE USE: type in a name and it randomly genrates a 
 * pattern for it that is reponsive and reacts to scrolling
 * and clicking and mousing
 * */
//
let mstrColumnList = "repeat(3, 320px)"
let mstrRowList = "repeat(3, 320px)"
let mastrAreaTemplate = '"gd0 gd1 gd2"\
				        "gd3 gd4 gd5"\
				        "gd6 gd7 gd8"'

let master = document.createElement("div");
master.setAttribute('id', 'master');    
document.body.appendChild(master);
master.style.display = 'grid';
master.style.gridGap = '10px';
master.style.gridTemplateColumns = mstrColumnList;
master.style.gridTemplateRows = mstrRowList;
master.style.gridTemplateAreas = mastrAreaTemplate;

//
let gridNum = 9;
let wrapList = [];

for(let i = 0; i < gridNum; i++){
let wrapper = document.createElement("div");
wrapper.setAttribute('class','wrap');
wrapper.setAttribute('id', 'wrapper'+[i]);    
wrapper.style.gridArea = 'gd'+[i];
wrapList.push('wrapper'+[i]);
document.getElementById('master').appendChild(wrapper);
}

let areaNameList = ['big', 'sm1', 'sm2', 'sm3'];

    for(let j = 0; j < wrapList.length; j++){
   
    
        for(let k = 0; k < areaNameList.length; k++){
        let square = document.createElement("div");   
        
        square.setAttribute('class', 'square');
        square.setAttribute('id', areaNameList[k]);
        square.style.gridArea = areaNameList[k];
    
        document.getElementById(wrapList[j]).appendChild(square);
            
        }
    
    }
//
let columnList = "repeat(3, 100px)"
let rowList = "repeat(3, 100px)"
let areaTemplate = '"big sm3 sm1"\
				    "big sm3 sm1"\
				    "sm2 sm2 sm2"'

for(let i = 0; i < wrapList.length; i++){
let currentWrap = document.getElementById(wrapList[i]);
currentWrap.style.gridTemplateColumns = columnList;
currentWrap.style.gridTemplateRows = rowList;
currentWrap.style.gridTemplateAreas = areaTemplate;
}



