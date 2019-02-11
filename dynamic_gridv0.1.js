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

//generate master grid

//determines the length of items in a nested grid by dividing up the 
// length of a section of the parent grid 
let masColumns = [40, 30, 50];
let masRows = [40, 60, 40];
let masUnit = '%';
let divideColBy = [.33, .33, .33];
let divideRowBy = [.33, .33, .33];
let subColumnList = [];
let subRowList = [];

for(let i = 0; i < masColumns.length; i++){
	let currentColumn = masColumns[i];
	let currentRow = masRows[i];
        for(let j = 0; j < divideColBy.length; j++){
		subColumnList.push(currentColumn * divideColBy[j] + masUnit);
		subRowList.push(currentRow * divideRowBy[j] + masUnit);
		}
}
//need to convert masColumns to a string with units
let regex = /,/gi;
let colString = masColumns.toString().replace(regex, masUnit + ' ')+masUnit;
let rowString = masRows.toString().replace(regex, masUnit + ' ')+masUnit;



let master = document.createElement("div");
master.setAttribute('id', 'master');    
document.body.appendChild(master);
master.style.display = 'grid';
master.style.gridGap = '10px';
master.style.gridTemplateColumns = colString;
master.style.gridTemplateRows = rowString;


//properties to generate and organize nested grids
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
//properties to organize items inside nested grids
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

for(let i = 0; i < wrapList.length; i++){
let currentWrap = document.getElementById(wrapList[i]);
currentWrap.style.gridTemplateColumns = null;
currentWrap.style.gridTemplateRows = null;
currentWrap.style.gridTemplateAreas = null;
}



