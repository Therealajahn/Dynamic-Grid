let firstName = [];
let lastName  = [];


function getLetters(){
firstName = document.getElementById('firstName').value.split('');
lastName = document.getElementById('lastName').value.split('');
console.log(firstName);
console.log(lastName);
}

function makeMaster(){
let letterNumber = firstName.length + lastName.length 
console.log(letterNumber);
//create rows and columns
let masColumns = [];
let masRows = [];
let letterLength = 100;
let masUnit = '%';
for(let i = 0; i < letterNumber;){
if(i < 3){
	masColumns.push(letterLength);
	}
else{masRows.push(letterlength - (letterLength/2))};	 
}
console.log(masColumns);
console.log(masRows); 
//convert rows and columns into strings with units
let regex = /,/gi;
let colString = masColumns.toString().replace(regex, masUnit + ' ')+masUnit;
let rowString = masRows.toString().replace(regex, masUnit + ' ')+masUnit;
//create master grid
let master = document.createElement("div");
master.setAttribute('id', 'master');    
document.body.appendChild(master);
master.style.display = 'grid';

master.style.gridTemplateColumns = colString;
master.style.gridTemplateRows = rowString;

}


