if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Package.blaze.Blaze.Template.registerHelper('noFB', function () {
      return !Meteor.user().services.facebook;
  });

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    userFb: function () {
      return Meteor.users().services.facebook;
    }

  });

  Template.hello.events({
    'click button.connectFacebook' : function () {
        Meteor.connectWithFacebook();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
