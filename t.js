$(function(){
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

	p.interactive = true
	p.loadMat(mat)
	
	p.update()
})
