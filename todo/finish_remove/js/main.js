
// Model  render List of Modules 

$(document).ready(function(){

	var todoItems = new TodoItems([
		new TodoItem({id: '1',  description: "TodoItem 1" }),
		new TodoItem({id: '2', description: "TodoItem 2" })
		]);
		
// pass to Vuie
	var todoItemsView = new TodoItemsView({ model: todoItems });
// render it 
	$("body").append(todoItemsView.render().$el);
});