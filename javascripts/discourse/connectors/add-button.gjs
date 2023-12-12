export default {
  setupComponent(args, component) {
    component.set('showAddButton', true);
  }

  <template>
    {{#if showAddButton}}
      <AddButton />
    {{/if}}
  </template>
};
