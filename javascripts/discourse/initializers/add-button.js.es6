import { withPluginApi } from 'discourse/lib/plugin-api';

function initializePlugin(api) {
  api.registerConnectorClass('after-create-topic-button', 'add-button', {
    setupComponent(args, component) {
      component.set('newTopicUrl', 'https://ehealthforum.nz/w/ws-new-topic');
    }
  });
}

export default {
  name: 'add-button',
  initialize: initializePlugin
};
