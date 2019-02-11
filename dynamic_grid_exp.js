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

console.log(subColumnList);
console.log(subRowList);
