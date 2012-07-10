steal('funcunit',function(){

module("App.Task.List", { 
	setup: function(){
		S.open("//app/task/list/list.html");
	}
});

test("delete tasks", function(){
	S('#create').click()
	
	// wait until grilled cheese has been added
	S('h3:contains(Grilled Cheese X)').exists();
	
	S.confirm(true);
	S('h3:last a').click();
	
	
	S('h3:contains(Grilled Cheese)').missing(function(){
		ok(true,"Grilled Cheese Removed")
	});
	
});


});