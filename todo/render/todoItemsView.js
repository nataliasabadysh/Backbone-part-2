
// Collection View 

var TodoItemsView = Backbone.View.extend({

	tagName: "ul", // to wrap list  this TodoItemsView items 

	id: "todoItems", // id for  <UL id = {} >

	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");
	},

	render: function(){
		// ref to the View 
		var self = this;

		this.model.each(function(todoItem){ 	// wrap TodoItemView and render 
		
			var view = new TodoItemView({ model: todoItem });
			self.$el.append(view.render().$el);
		});

		return this;
	}
});