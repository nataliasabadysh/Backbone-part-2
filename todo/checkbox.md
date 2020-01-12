

# 

```

// View 
var TodoItemView = Backbone.View.extend({
	tagName: "li",
	
	initialize: function(options){

		if (!(options && options.model))
			throw new Error("model is not specified.");
	},

	render: function(){
		this.$el.html("<input id='toggle' type='checkbox'> </input>" + this.model.escape("description"));
		return this;
	}
});
```

# value 

```
	onClickToggle: function(){

			// if(this.model.get("isComplited"))
			// this.model.set("isComplited", false)
			// else this.model.set("isComplited", true)

			this.model.set("isComplited", !this.model.set("isComplited"))
	},
```
# result 

```
	onClickToggle: function(){
			this.model.set("isComplited", !this.model.set("isComplited"));
			console.log('here we go', this.model.toJSON()); // { isComplited: false, description: "TodoItem 1" } 
	},
```


#  Incapsulation 

```
___ Modal 

var TodoItem = Backbone.Model.extend({
	validate: function(attrs){
		if (!attrs.description)
			return "Description is required.";
	},
	toggle: function(){
		this.set("isComplited", !this.get("isComplited"));
	}
});

____ TodoItemView

	onClickToggle: function(){
		this.model.toggle();
	},	
 ```


# listen to the checges in the modal to update UI 

* default value 
```

var TodoItem = Backbone.Model.extend({

	defaults: {  ✅
		isComplited: false
	},

	validate: function(attrs){
		if (!attrs.description)
			return "Description is required.";
	},
	toggle: function(){
		this.set("isComplited", !this.get("isComplited"));
	}
});

```

* 

```

var TodoItemView = Backbone.View.extend({
	tagName: "li",
	
	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");

		this.model.on("change", this.render, this);
	},

	events: {
		"click #toggle": "onClickToggle"
	},

	onClickToggle: function(){
		this.model.toggle();
		console.log(this.model.toJSON());
	},

	render: function(){
		this.$el.toggleClass("completed", this.model.get("isCompleted"));

		var checked = this.model.get("isCompleted") ? "checked" : "";
		this.$el.html("<input id='toggle' type='checkbox'" + checked +"></input>" + this.model.escape("description"));

		return this;
	}
});
```

