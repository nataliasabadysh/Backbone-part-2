

// View 
var TodoItemView = Backbone.View.extend({
	tagName: "li",
	
	initialize: function(options){
		// if we forget to pass a modal to the View 

		if (!(options && options.model))
			throw new Error("model is not specified.");
	},

	render: function(){
		this.$el.html(this.model.get("description"));

		return this;
	}
});