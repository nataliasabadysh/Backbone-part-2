

// ROUTERS++++++

// 1. Vuew 

var ArtistsView = Backbone.View.extend({
	render: function(){
		this.$el.html("ARTISTS VIEW"); // fetch API 

		return this;
	}
});

var AlbumsView = Backbone.View.extend({
	render: function(){
		this.$el.html("ALBUMS VIEW"); // fetch API 

		return this;
	}
});

var GenresView = Backbone.View.extend({
	render: function(){ 
		this.$el.html("GENRES VIEW"); // fetch API 

		return this;
	}
});

// Routers 

var AppRouter = Backbone.Router.extend({
	routes: {
		"albums": "viewAlbums",
		"albums/:albumId": "viewAlbumById",
		"artists": "viewArtists",
		"genres": "viewGenres",
		"*other": "defaultRoute"
	},

	viewArtists: function(){
		var view = new ArtistsView({ el: "#container" });
		view.render();
	},

	viewGenres: function(){
		var view = new GenresView({ el: "#container" });
		view.render();
	},

	defaultRoute: function(){

	},

	viewAlbumById: function(albumId){

	},

	viewAlbums: function(){
		var view = new AlbumsView({ el: "#container" });
		view.render();
	}
});

var router = new AppRouter();
Backbone.history.start();

var NavView = Backbone.View.extend({
	events: {
		"click": "onClick"
	},

	onClick: function(e){
		var $li = $(e.target);
		router.navigate($li.attr("data-url"), { trigger: true });
	}
});

var navView = new NavView({ el: "#nav" });



<nav id="nav">
<ul>
    <li data-url="albums"><a href="Albums.html">Albums</a></li>
    <li data-url="artists"><a href="Artists.html">Artists</a></li>
    <li data-url="genres" ><a href="Genres.html">Genres</a></li>
</ul>
</nav>

