Roses = new Meteor.Collection("roses");

if(Meteor.isClient) {
  Template.rose_list.roses = function () {
    return Roses.find({}, {sort: {likes: -1, name: 1}});
  };
}

