import Ember from 'ember';
import layout from '../templates/components/b-modal'
export default Ember.Component.extend({
    show: function() {
      this.$('.modal').modal();
    }.on('didInsertElement')
});



