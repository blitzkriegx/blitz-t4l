steal( 'jquery/controller',
	   'jquery/view/ejs',
	   'jquery/controller/view',
	   'app/models' )
.then( './views/init.ejs', 
       './views/task.ejs', 
       function($){

/**
 * @class App.Task.List
 * @parent index
 * @inherits jQuery.Controller
 * Lists tasks and lets you destroy them.
 */
$.Controller('App.Task.List',
/** @Static */
{
	defaults : {}
},
/** @Prototype */
{
	init : function(){
		this.element.html(this.view('init',App.Models.Task.findAll()) )
	},
	'.destroy click': function( el ){
		if(confirm("Are you sure you want to destroy?")){
			el.closest('.task').model().destroy();
		}
	},
	"{App.Models.Task} destroyed" : function(Task, ev, task) {
		task.elements(this.element).remove();
	},
	"{App.Models.Task} created" : function(Task, ev, task){
		this.element.append(this.view('init', [task]))
	},
	"{App.Models.Task} updated" : function(Task, ev, task){
		task.elements(this.element)
		      .html(this.view('task', task) );
	}
});

});