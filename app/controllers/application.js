import Ember from 'ember';


export default Ember.Controller.extend({
    actions: {
        openModal: function(targetId) {
            var modal = Ember.Views.views[targetId];
            modal.send('toggleModal');
        }
    }
});

