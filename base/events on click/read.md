# Modal

```
var Venue = Backbone.Model.extend();
```
# Collection

```
var Venues = Backbone.Collection.extend({
	model: Venue
});

```
# Vuev 

#  render name on Venue for each list of item

* displays name of the Venue
* this.$el.html(this.model.get("name"));

```
var VenueView = Backbone.View.extend({
	tagName: "li",

	initialize: function(options){
		this.bus = options.bus;
	},

	events: {
		"click": "onClick",
	},

	onClick: function(){
		this.bus.trigger("venueSelected", this.model);
	},

	render: function(){
		this.$el.html(this.model.get("name"));

		return this;
	}
});

```

# collection View

* render the collection 
* using each item in VenueView


```
var VenuesView = Backbone.View.extend({
	tagName: "ul",

	id: "venues",

	initialize: function(options){
		this.bus = options.bus;
	},

	render: function(){
		var self = this;

		this.model.each(function(venue){
			var view = new VenueView({ model: venue, bus: self.bus });
			self.$el.append(view.render().$el);
		});

		return this;
	}
});

```


# map View

* toch DOM elemenent with id type container 
* display name of Vuenu 
* by defaul init with no modal 

* as we select item on the list 
* render method will be calld 


```

var MapView = Backbone.View.extend({
	el: "#map-container",

	initialize: function(options){
		this.bus = options.bus;

		this.bus.on("venueSelected", this.onVenueSelected, this);
	},

	onVenueSelected: function(venue){
		this.model = venue;
		this.render();
	},

	render: function(){
		if (this.model)
			this.$("#venue-name").html(this.model.get("name"));

		return this;
	}
})


```


# initialaze collection 

```

var venues = new Venues([
	new Venue({ name: "30 Mill Espresso" }),
	new Venue({ name: "Platform Espresso" }),
	new Venue({ name: "Mr Foxx" })
	]);

```
# communication between 2 views

```
var bus = _.extend({}, Backbone.Events);

```


# collection put it inside of Vuneus Vue 
```
var venuesView = new VenuesView({ model: venues, bus: bus });
$("#venues-container").html(venuesView.render().$el);
```

# and render it 
```
var mapView = new MapView({ bus: bus });
mapView.render();
```


```
 <div id="container">
            <div id="venues-container"></div>
            <div id="map-container">
                <span id="venue-name"></span>
		</div>
</div>

```



# 

``` 
creaded bus obj

```
