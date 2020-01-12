

# URL to the Modal 


```
var TodoItem = Backbone.Model.extend({
	urlRoot: "https://jsonplaceholder.typicode.com/todos",

```

# URL to the Colllectopns

```

var TodoItems = Backbone.Collection.extend({
	model: TodoItem,
	url: "https://jsonplaceholder.typicode.com/todos",
});


```


# fetch 


```
$(document).ready(function(){

	var todoItems = new TodoItems();// removed on state statics
	todoItems.fetch();

// pass to Vuie
	var todoItemsView = new TodoItemsView({ model: todoItems });
// render it 
	$("body").append(todoItemsView.render().$el);
});

```


# Vueiw + save method   for toggle 

```
	onClickToggle: function(){
		this.model.toggle();
		this.model.save(); ✅
		
		console.log(this.model.toJSON());
	},

```

# Save item to the server  todoItem.save()

```
	onClickAdd: function(){ // to DOM 
		var $textBox = this.$("#newTodoItem");

		if ($textBox.val()){
			var todoItem = new TodoItem({ title: $textBox.val() }); // value from Input 
			todoItem.save() ✅
			this.model.add(todoItem);
		

			$textBox.val(""); // reset 
		}
	},
```

# or  	this.model.create(todoItem);
```
	onClickAdd: function(){ // to DOM 
		var $textBox = this.$("#newTodoItem");

		if ($textBox.val()){
			var todoItem = new TodoItem({ title: $textBox.val() }); // value from Input 
				this.model.create(todoItem);✅
			$textBox.val(""); // reset 
		}
	},
```


