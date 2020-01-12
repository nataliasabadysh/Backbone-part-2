
// // Module 

// define([
//     'underscore',
//     'backbone',
//     'models/song'
// ], function(_, Backbone, Song) { // factory on loaded
//     var Song = Backbone.Model.extend();

//     return Song;
// });

// Module 

define([
    'underscore',
    'backbone',
    'views/SongViews'
], function(_, Backbone, Song, SongViews) { // factory on loaded

    // for staring our app 

    var initalize = function(){

    },

    return {
        initalize: initalize,
    }
});
