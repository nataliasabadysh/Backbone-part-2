
// Collection View 

var TodoItemsView = Backbone.View.extend({

	id: "todoItemsContainer",
	
	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");

		this.model.on("add", this.onAddTodoItem, this);
		this.model.on("remove", this.onRemoveTodoItem, this);
	},

	onRemoveTodoItem: function(todoItem){
		this.$("li#" + todoItem.id).remove();
	},

	onAddTodoItem: function(todoItem){
		var view = new TodoItemView({ model: todoItem });
		this.$("#todoItems").append(view.render().$el);
	},

	events: {
		"click #add": "onClickAdd",
		"keypress #newTodoItem": "onKeyPress"
	},
	
	// onKeyPress: function(e){
	// 	if (e.keyCode == 13)
	// 		this.onClickAdd();
	// },
	onKeyPress: function(e){
		if (e.keyCode == 13){
			var $textBox = this.$("#newTodoItem");

			if ($textBox.val()){
				var todoItem = new TodoItem({ title: $textBox.val() });
				this.model.create(todoItem);

				$textBox.val("");
			}	
		}
	},

	onClickAdd: function(){ // to DOM 
		var $textBox = this.$("#newTodoItem");

		if ($textBox.val()){
			var todoItem = new TodoItem({ title: $textBox.val() }); // value from Input 
			this.model.create(todoItem);
			$textBox.val(""); // reset 
		}
	},


	render: function(){  				// ref to the View 	
		var template = $("#todoItemsTemplate").html();
		var html = Mustache.render(template);
		this.$el.html(html);

		return this;
		}
	})