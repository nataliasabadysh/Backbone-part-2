
// 1. Vuew 
define([
    'jquery', // ref to 
    'underscore',
    'backbone', 
    'modules/song'
], function($,_, Backbone, Song) { // factory on loaded
    var SongView = Backbone.View.extend({
        render: function(){
            this.$el.html(this.model.get("title"));
            return this;
    
        }
    });
    return SongView;
});


