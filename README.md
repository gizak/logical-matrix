### Getting Started

1. Import

		<script type="text/javascript" src="/path/to/jQuery"></script>
		<script type="text/javascript" src="/path/to/ProcessingJS"></script>
		<script type="text/javascript" src="/path/to/logical-matrix.js"></script>

2. Initial with a div container

	*.html*
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
   It is ready to display and manipulate.
   
   [More Usages and examples..](#)
