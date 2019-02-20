//unobjectify firstname, lastName, and columnNum
//condition for column creation must be before it needs to be
//printed or used, duh


let grids = {};
grids.firstName = [];
grids.lastName  = [];
let upperFirst = [];
let upperLast = [];

let gridAreas = {};

function getLetters(){
let enterPressed = false;
let shift = false;
let capsLock = false;

let keysDown = document.addEventListener('keydown', ()=>{

	let key = event.which || event.keycode;
	const letterInput = 64 <= key && key <= 90;  
	
	if(key === 13 && enterPressed === false){
		enterPressed = true
		console.log('lastName!');
		
		} else if(key === 13 && enterPressed === true){
		enterPressed = false
		console.log('firstName!');
		
		
		
		};
//enter key toggles between lastName and firstName
//prints number of columns and rows of masterGrid
		if(letterInput && enterPressed === false){
	grids.firstName.push(String.fromCharCode(key));
	console.log(grids.firstName);
	console.log(grids.lastName.length, grids.firstName.length);
	grids.columnNum = grids.lastName.length;
	console.log(grids.columnNum);
	console.log(`Rows: ${grids.rowString}\nColumns: ${grids.columnString}`);	
		}else if(letterInput && enterPressed === true){
		grids.lastName.push(String.fromCharCode(key));
		console.log(grids.lastName);
		console.log(grids.lastName.length, grids.firstName.length);
		console.log(grids.columnNum);
		console.log(`Rows: ${grids.rowString}\nColumns: ${grids.columnString}`);
		}else if(key === 8 || 13 || 16 || 20){}
		 else{
	console.log('Only Letters Will Be Accepted');
		};
//all keycodes for letters pressed are converted to letters and..
//added to a name array
//all non-letters except for shift, capslock, enter, or backspace 
//will be ignored  		
		if(key === 8 && enterPressed === false){
	grids.firstName.pop();
	upperFirst.pop();
	console.log(grids.firstName);
	console.log(upperFirst);
		}else if(key === 8 && enterPressed === true){
		grids.lastName.pop();
		upperLast.pop();
		console.log(grids.lastName);
		console.log(upperLast);
		};
//backspace key deletes the last letter of the selected array
	
	if(key === 16 && shift === false){
	shift = true;
	console.log(`shift: ${shift}`);
		}
//shift key toggled true if pressed	
	let keysUp = document.addEventListener('keyup', ()=>{
		let keyup = event.which || event.keycode;
		
		if(keyup === 16 && shift === true){
		shift = false;
		console.log(`shift: ${shift}`);
			}
	});
//shift will be toggled to false if key is released	
	if(key === 20 && capsLock === false){
	capsLock = true;
	console.log(`capsLock: ${capsLock}`);
		}else if(key === 20 && capsLock === true){
		 capsLock = false;
		 console.log(`capsLock: ${capsLock}`);				
		 }

//capsLock variable toggled true or false		 
	
	if(letterInput && 
	   (shift === false &&
	    capsLock === false &&
	    enterPressed === false)
		){
	upperFirst.push('low');
	console.log(upperFirst);
	}else if(letterInput &&
			 (shift === true ||
			 capsLock === true)&&
			 enterPressed === false
			 ){
		upperFirst.push('upper');
		console.log(upperFirst);
		};
	
	if(letterInput && 
	   (shift === false &&
	    capsLock === false &&
	    enterPressed === true)
		){
	upperLast.push('low');
	console.log(upperLast);
	}else if(letterInput &&
			 (shift === true ||
			 capsLock === true)&&
			 enterPressed === true
			 ){
		upperLast.push('upper');
		console.log(upperLast);
		};	
//pressing shift or capsLock will make subsequent...
// ...key presses also store an 'upper' property in ...
//...separate arrays for each name array


	});

}
getLetters();



function makeDimensions(){

grids.rowNum = 2;
grids.columnNum = grids.firstName.length;

//number of rows for masterGrid set to longest name		
console.log(`grids.columnNum: ${grids.columnNum}`);
let rowSpace = '100px ';
let columnSpace = '200px ';
//create rows and columns
grids.rowString = rowSpace.repeat(grids.rowNum);
grids.columnString = columnSpace.repeat(grids.columnNum);

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


