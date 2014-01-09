$(function(){
	
	// sketch1
	var p1 = new LogicMatrix('sketch1')
	var mat1 = [
		[0,0,0,1,1,0,0],
		[0,0,1,1,1,0,0],
		[0,0,0,1,1,0,0],
		[0,0,0,1,1,0,0],
		[0,0,0,1,1,0,0],
		[0,0,0,1,1,0,0],
		[0,0,1,1,1,1,0]
    ]
	p1.loadMat(mat1)
	p1.update()

	// sketch2
	function dump(m){
		var s = "[\n";

		for( var i = 0; i < m.length; i++) {
			var row = ""
			for(var j = 0; j <m[0].length; j++) {
				row += m[i][j].toString()+", "
			}
			row = row.slice(0,-2)
			s += "  ["+row+"],\n"
		}
		s = "<pre><code>"+s.slice(0,-2)+"\n]</code></pre>"

		$("#sketch2-dump").html(s)
	}
	
	var p2 = new LogicMatrix('sketch2')
	var mat2 = [
		[0,0,0,1,1,0,0],
		[0,0,1,1,1,0,0],
		[0,0,0,1,1,0,0],
		[0,0,0,1,1,0,0],
		[0,0,0,1,1,0,0],
		[0,0,0,1,1,0,0],
		[0,0,1,1,1,1,0]
    ]
	p2.interactive = true
	p2.loadMat(mat2)
	p2.update()
})
