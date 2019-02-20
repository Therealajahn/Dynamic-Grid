let firstName = [];
let lastName  = [];
let upperFirst = [];
let upperLast = [];
let grids = {};
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

		if(letterInput && enterPressed === false){
	firstName.push(String.fromCharCode(key));
	console.log(firstName);
		}else if(letterInput && enterPressed === true){
		lastName.push(String.fromCharCode(key));
		console.log(lastName);
		}else if(key === 8 || 13 || 16 || 20){}
		 else{
	console.log('Only Letters Will Be Accepted');
		};
		
		if(key === 8 && enterPressed === false){
	firstName.pop();
	upperFirst.pop();
	console.log(firstName);
	console.log(upperFirst);
		}else if(key === 8 && enterPressed === true){
		lastName.pop();
		upperLast.pop();
		console.log(lastName);
		console.log(upperLast);
		};
// enter key toggles between first name and last Name
//only letters are accepted for first name and last name
	
	if(key === 16 && shift === false){
	shift = true;
	console.log(`shift: ${shift}`);
		}
	
	let keysUp = document.addEventListener('keyup', ()=>{
		let keyup = event.which || event.keycode;
		
		if(keyup === 16 && shift === true){
		shift = false;
		console.log(`shift: ${shift}`);
			}
	});
	
	if(key === 20 && capsLock === false){
	capsLock = true;
	console.log(`capsLock: ${capsLock}`);
		}else if(key === 20 && capsLock === true){
		 capsLock = false;
		 console.log(`capsLock: ${capsLock}`);	
			}
	
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
//pressing shift or capsLock will make subsequent key presses also store an 'upper'
//property in an array
grids.rowNum = 2;
grids.columnNum = firstName.length > lastName.length ? 
		firstName.length :
		lastName.length;
console.log(`grids.columnNum: ${grids.columnNum}`);
	});

}
getLetters();



function makeDimensions(){

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


