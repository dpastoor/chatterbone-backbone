window.MessageView = Backbone.View.extend({
  template: _.template("<div> <%= text %> - sent from room: <%= roomname %> </div>"),
  initialize: function(){
    this.model.on('change', this.render, this);
  },
  render: function(){
    console.log(this.template)
    console.log('model:')
  console.log(this.model)
  console.log('jsonified model:')
  console.log(this.model.toJSON())
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  remove: function(){
    this.model.destroy();
  },
  className: 'input-group input-group-lg'

});

window.MessagesView = Backbone.View.extend({
  initialize: function(){
    this.collection.on('add', this.addOne, this);
    this.collection.on('reset', this.addAll, this);
    this.collection.on('destroy', this.render, this);
  },

  render: function(){
    this.addAll();
    return this;
  },

  addAll: function(){
    this.$el.empty();
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(message){
    var messageView = new MessageView({model: message});
    this.$el.append(messageView.render().el);
  }

});
