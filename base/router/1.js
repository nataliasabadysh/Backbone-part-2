
// 

var AlbomsVuew  = Backbone.View.extand({
	render:function(){
		this.$el.html("ALBOM VIUE"); // fetch a modal from a rest PI  + inject to tamplate 
		return this;
	}
});

var AppRouter = Backbone.Router.extend({
	routes: {
		"albom": "viewAlboms",  // google.com/albom will be called method  viewAlboms
	}, 
	viewAlboms : function(){
		var view = new AlbomsVuew({
			el: "#container"
		});
		view.render();

	}
})