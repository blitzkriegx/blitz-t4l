steal("funcunit/qunit", "app/fixtures", "app/models/task.js", function(){
	module("Model: App.Models.Task")
	
	test("findAll", function(){
		expect(4);
		stop();
		App.Models.Task.findAll({}, function(tasks){
			ok(tasks)
	        ok(tasks.length)
	        ok(tasks[0].name)
	        ok(tasks[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new App.Models.Task({name: "dry cleaning", description: "take to street corner"}).save(function(task){
			ok(task);
	        ok(task.id);
	        equals(task.name,"dry cleaning")
	        task.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new App.Models.Task({name: "cook dinner", description: "chicken"}).
	            save(function(task){
	            	equals(task.description,"chicken");
	        		task.update({description: "steak"},function(task){
	        			equals(task.description,"steak");
	        			task.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new App.Models.Task({name: "mow grass", description: "use riding mower"}).
	            destroy(function(task){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})