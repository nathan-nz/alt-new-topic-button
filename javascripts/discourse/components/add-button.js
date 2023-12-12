// add-button.js
import EmberObject from '@ember/object';
import { action } from '@ember/object';

export default EmberObject.extend({
  newTopicUrl: 'https://ehealthforum.nz/w/ws-new-topic',

  goToNewTopic: action(function() {
    window.location.href = this.newTopicUrl;
  })
});
