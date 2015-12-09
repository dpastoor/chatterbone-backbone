window.Chatterbone = new (Backbone.Router.extend({
  routes: {'':'index'},
  initialize: function() {
    this.messages = new Messages();
    this.messagesView = new MessagesView({collection: this.messages});
    this.messagesView.render();
  },
  index: function() {
    var fixtures = [
      {text: 'Learn Backbone.js', roomname:'the hovel'},
      {text: 'Learn React.js', roomname:'the hovel'}
    ];
    $('#app').html(this.messagesView.el);
    this.messages.reset(fixtures);
  },
  start: function() {
    Backbone.history.start();
  }
}));
