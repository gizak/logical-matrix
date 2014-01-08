### logical-matrix

_Display 0-1 (binary) matrix on browsers interactively based on ProcessingJS and jQuery._

---------------------------------------

### Getting Started

1. Import

		<script type="text/javascript" src="/path/to/jQuery"></script>
		<script type="text/javascript" src="/path/to/ProcessingJS"></script>
		<script type="text/javascript" src="/path/to/logical-matrix.js"></script>

2. Initial with a div container

	*.html (the canvas size is set to be equal to the div container size)*
	
	`<div id="sketch" style="height:250px;width:250px;"></div>`

	*.js*

		var p = new LogicMatrix('sketch')

		var mat = [
			[0,0,0,1,1,0,0],
			[0,0,1,1,1,0,0],
			[0,0,0,1,1,0,0],
			[0,0,0,1,1,0,0],
			[0,0,0,1,1,0,0],
			[0,0,0,1,1,0,0],
			[0,0,1,1,1,1,0]
			]

		p.loadMat(mat)
		p.update()

3. Done

   It is ready to display and manipulate. [Find more Usages and examples..](#)
