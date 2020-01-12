
var TodoItemView = Backbone.View.extend({
	tagName: "li",
	
	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");

		this.model.on("change", this.render, this);
	},

	events: {
		"click #toggle": "onClickToggle",
		"click #delete": "onClickDelete"
	},

	onClickToggle: function(){
		this.model.toggle();
		this.model.save(); // syn with server
		console.log(this.model.toJSON());
	},


	onClickDelete: function(){
		console.log('delete');
		
		this.model.destroy();// RREST DELETE  remove from collection 

	},

// 	render: function(){
// 		this.$el.attr("id", this.model.id);

// 		this.$el.toggleClass("completed", this.model.get("completed"));

// 		var checked = this.model.get("completed") ? "checked" : "";
		
// 		// this.$el.html(
// 		// 			"<input id='toggle' type='checkbox'" + checked +"></input>" + 
// 		// 			this.model.escape("title") + "<button id='delete'>Delete </button>"
// 		// 		);

// 		var template = ("#todoItemTemplate").html();
// 		var html  = Mustach.render(template, this.model.toJSON);

// 		this.$el.html(html);


				
// 		return this;
// 	}
// });

		render: function(){
			this.$el.attr("id", this.model.id);
			
			this.$el.toggleClass("completed", this.model.get("completed"));

			var template = $("#todoItemTemplate").html();
			var html = Mustache.render(template, this.model.toJSON());
			this.$el.html(html);

			return this;
		}
});