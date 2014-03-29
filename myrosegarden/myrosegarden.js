Roses = new Meteor.Collection("roses");

if(Meteor.isClient) {
    Template.roseList.roses = function () {
        return Roses.find({}, {sort: { name: 1}});
    };

    // Handle roseForm events
    Template.roseForm.events = {
        'submit': function (e, tmpl) {
            // Don't postback
            e.preventDefault();

            // create the new rose
            var newRose = {
                name: tmpl.find("#name").value
            };

            // add the rose to the db
            Roses.insert(newRose);
        }
    };
};
