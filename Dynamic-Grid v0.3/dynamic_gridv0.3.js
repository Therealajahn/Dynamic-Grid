let firstName = [];
let lastName  = [];


function getLetters(){
firstName = document.getElementById('firstName').value.split('');
lastName = document.getElementById('lastName').value.split('');
console.log(firstName);
console.log(lastName);
}

let grids = {};
let gridAreas = {};

function makeDimensions(){
grids.rowNum = 5;
grids.columnNum = 6;
let rowSpace = '100px';
let columnSpace = '200px';
//create rows and columns
let row = `${rowSpace} ` 
let column = `${columnSpace} `
let rowString = row.repeat(grids.rowNum);
let columnString = column.repeat(grids.columnNum);
console.log(rowString, columnString);
}
makeDimensions();

function makeMaster(rowString, columnString){
grids.master = document.createElement('div');
grids.master.setAttribute('id', 'master');
let wrapper = document.getElementById('wrapper');
wrapper.appendChild(grids.master);

grids.master.style.display = "grid";
grids.master.style.gridTemplateColumns = columnString;
grids.master.style.gridTemplateRows = rowString;
}
makeMaster();

function makeWrapper() {

grids.subGridNum = 5

for(let i = 0; i < grids.subGridNum; i++){
grids.subGrid = document.createElement('div');
grids.master.appendChild(grids.subGrid);
grids.subGrid.setAttribute('class', 'sub-grid');
grids.subGrid.setAttribute('id', `gd${i}`);
	}

}
makeWrapper();

function subGridassignments(){
//generate default grid-area assignments
let xOne = 0;
let yOne = 0;
let xTwo = 0;
let yTwo = 0;
let names = [];
let assignment = [];


for (let i = 0; i < grids.rowNum; i++){
    names.push('row'+[i]); 
		}
for (let i = 0; i < grids.rowNum; i++){
    xOne = i+1;
	xTwo = i+2; 
	for(let j = 0; j < grids.columnNum; j++){	
		yOne = j+1;
		yTwo = j+2;
		
		assignment.push(`${xOne}/${yOne}/${xTwo}/${yTwo}`);
		}
	
	gridAreas[names[i]] = assignment;
	assignment = [];
	}
	
console.log(assignment);
console.log(gridAreas);	
}
subGridassignments();


