steal(
	'./app.css', 			// application CSS file
	'./models/models.js',		// steals all your models
	'./fixtures/fixtures.js',	// sets up fixtures for your models
	'app/task/create',
	'app/task/list',
	function(){					// configure your application
		
		$('#tasks').app_task_list();
		$('#create').app_task_create();
})