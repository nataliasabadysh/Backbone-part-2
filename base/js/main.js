

// ROUTERS++++++

// 1. Vuew 
var SongView = Backbone.View.extend({
	render: function(){
		this.$el.html(this.model.get("title"));
		return this;

	}
});


var song = new Song({ title: "Blue is Green"});

var songView = new SongView({ el: "#container", model :song});
songView.render();
