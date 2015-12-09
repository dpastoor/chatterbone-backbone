window.Message = Backbone.Model.extend({
});

window.Messages = Backbone.Collection.extend({
  model: Message,
  initialize: function() {
    this.on('destroy', this.removeElement, this)
  },
  removeElement: function(model) {
    this.remove(model);
  }

});
