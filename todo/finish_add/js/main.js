
// Model  render List of Modules 

$(document).ready(function(){

	var todoItems = new TodoItems([
		new TodoItem({ description: "TodoItem 1" }),
		new TodoItem({ description: "TodoItem 2" })
		]);
// pass to Vuie
	var todoItemsView = new TodoItemsView({ model: todoItems });
// render it 
	$("body").append(todoItemsView.render().$el);
});