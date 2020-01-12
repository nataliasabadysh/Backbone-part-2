
// Collection View 

var TodoItemsView = Backbone.View.extend({

	tagName: "ul", 						// to wrap list  this TodoItemsView items 

	id: "todoItems", 					// id for  <UL id = {} >

	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");

			this.model.on("add", this.onAddTodoItem, this);
			this.model.on("remove", this.onRemoveTodoItem, this)
	},

	onAddTodoItem: function(todoItem){ // for collection events 
		var view = new TodoItemView({ model: todoItem });
		this.$el.append(view.render().$el)
	},

	onRemoveTodoItem: function(todoItem){
		this.$("li#" + todoItem.id).remove();
		// console.log('modal will be removed ', todoItem);
	},

	events: {
		"click #add": "onClickAdd",
		"keypress #newTodoItem": "onKeyPress"
	},
	
	onKeyPress: function(e){
		if (e.keyCode == 13)
			this.onClickAdd();
	},

	onClickAdd: function(){ // to DOM 
		var $textBox = this.$("#newTodoItem");

		if ($textBox.val()){
			var todoItem = new TodoItem({ description: $textBox.val() }); // value from Input 
			this.model.add(todoItem);

			$textBox.val(""); // reset 
		}
	},


	render: function(){  				// ref to the View 
		var self = this;

		this.$el.append("<button id='add'>Add</button>");
		this.$el.append("<input type='text' autofocus id='newTodoItem'></input>")
		this.model.each(function(todoItem){ 	// wrap TodoItemView and render  
			var view = new TodoItemView({ model: todoItem });
			self.$el.append(view.render().$el);
		});

		return this;
	}
});