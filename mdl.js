//Creating a new javascript framework for the MDL University site

(function(global, $) {

    //set up a holding function - we will hold all new functions in this primary function's prototype
    var MDLUniversity = function() {
        return new MDLUniversity.init(arguments);
    }

    var currentHidden = {
        classes: [],
        getHidden: function () {

        }
    };



    MDLUniversity.init = function () {
        var self = this;
    }

    MDLUniversity.init.prototype = MDLUniversity.prototype;


    //setting up a new name for the MDLUniversity function
    global.MDLUniversity = global.U$ = MDLUniversity;
}())