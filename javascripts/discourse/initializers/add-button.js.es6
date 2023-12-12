api.registerConnectorClass('after-create-topic-button', 'add-button', {
  setupComponent(args, component) {
    component.set('newTopicUrl', 'https://ehealthforum.nz/w/ws-new-topic');
  }
});
