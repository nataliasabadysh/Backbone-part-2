

# Collection View 

var TodoItemsView = Backbone.View.extend({

... 

	events: {
		"click #add": "onClickAdd",
	},

	onClickAdd: function(){
			var todoItem = new TodoItem({ description: "Text" });
			console.log('Clicked')
			this.model.add(todoItem);
		
	},

..render 

		this.$el.append("<button id='add'>Add</button>");
});

# refresh UI 
# add event for the collection 



```
	initialize: function(options){
		.. 
			this.model.on("add", this.onAddTodoItem, this);
	},

    onAddTodoItem: function(todoItem){
		console.log('Added')
	},
```

# And to Add to the Collection

```
	onAddTodoItem: function(todoItem){
		var view = new TodoItemView({ model: todoItem });
		this.$el.append(view.render().$el);
	},
```

# add input 
```
    this.$el.append("<input type='text' autofocus id='newTodoItem'></input>")
```

# to desc add value of text box

```
	onClickAdd: function(){ 
			var todoItem = new TodoItem({ description: this.$("#newTodoItem").val() }); 
			this.model.add(todoItem);
			this.$("#newTodoItem").val(''); // reset 
	},

```

# onKeyPress ENTER 


```
	events: {
		"keypress #newTodoItem": "onKeyPress"
	},
	
	onKeyPress: function(e){
		if (e.keyCode == 13)
			this.onClickAdd(); // DO SMTH :)
	},

```

