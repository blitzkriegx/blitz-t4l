// map fixtures for this application

steal("jquery/dom/fixture", function(){
	
	$.fixture.make("task", 5, function(i, task){
		var descriptions = ["grill fish", "make ice", "cut onions"]
		return {
			name: "task "+i,
			description: $.fixture.rand( descriptions , 1)[0]
		}
	})
})