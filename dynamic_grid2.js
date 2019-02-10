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


//generate wrapper div
let wrapper = document.createElement("div");
wrapper.setAttribute('id', 'wrapper');
document.body.appendChild(wrapper);
//function takes object grid as parameter
function dynamicGrid(grid){

	let areaNameList = [...grid.areaNames];

	for(let i = 0; i < areaNameList.length; i++){
		let x = 0;
		let y = 0;
		x = x + (i * 120);
		let fromLeft = x +'px';
		let fromTop = y + 'px';
		
		let square = document.createElement("div");
		square.setAttribute('class', 'square');
		square.setAttribute('id', areaNameList[i]);
		
		square.style.gridArea = areaNameList[i];
		
		document.getElementById('wrapper').appendChild(square);
	}
	
}
dynamicGrid({areaNames:['big', 'sm1', 'sm2', 'sm3']});

function moveLines(lines){
	wrapper.style.gridTemplateColumns = lines.columnList;
	wrapper.style.gridTemplateAreas = lines.areaTemplate;
	}

moveLines({columnList: "repeat(3, 100px)",
		  areaTemplateList:'"big sm3 sm1"\
							"big sm3 sm1"\
							"sm2 sm2 sm2"' });
