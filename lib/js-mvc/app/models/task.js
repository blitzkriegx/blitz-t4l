steal('jquery/model', function(){

/**
 * @class App.Models.Task
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend task services.  
 */
$.Model('App.Models.Task',
/* @Static */
{
	findAll: "/tasks.json",
  	findOne : "/tasks/{id}.json", 
  	create : "/tasks.json",
 	update : "/tasks/{id}.json",
  	destroy : "/tasks/{id}.json"
},
/* @Prototype */
{});

})