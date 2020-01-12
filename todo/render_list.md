
# 1. View to displaying to do item 

* render 
* in the Modal we are acpect to have a discr (this.$el.html(this.model.get("description"));)
* we will add some Validation Below

```
var TodoItemView = Backbone.View.extend({
	tagName: "li",
	
	initialize: function(options){
		if (!(options && options.model))
			throw new Error("model is not specified.");
	},

	render: function(){
		this.$el.html(this.model.get("description"));

		return this;
	}
});

```

# Modal pass to the View and render it 

*  to make sure thet DOM is ready .. $(document).ready(function(){ 
*  append DOM el to Body 

```

// Model  render List of Modules 

$(document).ready(function(){

	var todoItems = new TodoItems([
		new TodoItem({ description: "TodoItem 1" }),
		new TodoItem({ description: "TodoItem 2" })
		]);

	var todoItemsView = new TodoItemsView({ model: todoItems });  // pass to Vuie
	$("body").append(todoItemsView.render().$el); // render it 
});
```


#  Validation for the Modal 

*  for TodoItemView  to get (this.model.get("description")

```

var TodoItem = Backbone.Model.extend({
	validate: function(attrs){
		if (!attrs.description)
			return "Description is required.";
	}
});


```

# 

# Render A List 👀

# 1. Modal View _ 
# 2. Collection View _ 


* 1. passing  each element to TodoItemView
*  model: todoItem to var view = new TodoItemView({ model: todoItem });

* if we won't  .. = new TodoItemView();
* we have this init * initialize: function(options){

```


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
```


