
// Model  render List of Modules 

$(document).ready(function(){

	var todoItems = new TodoItems();// removed on state statics
	todoItems.fetch({
		success: function(){}
		// { // add render body 
		// 	var todoItemsView = new TodoItemsView({ model: todoItems });
		// 	$("body").append(todoItemsView.render().$el);
		// }
	});

// pass to Vuie
	var todoItemsView = new TodoItemsView({ model: todoItems });
// render it 
	$("body").append(todoItemsView.render().$el);
});