import { withPluginApi } from 'discourse/lib/plugin-api';

function initializePlugin(api) {
  api.decorateWidget('create-topic:after', helper => {
    return helper.h('a.btn.btn-icon-text.btn-default#new-topic-alt', {
      href: 'https://ehealthforum.nz/w/ws-new-topic',
      html: `
        <svg class="fa d-icon d-icon-lock svg-icon svg-string" xmlns="http://www.w3.org/2000/svg">
          <use href="#lock"></use>
        </svg>
        <span class="d-button-label">New Secure Topic</span>
      `
    });
  });
}

export default {
  name: 'add-button',
  initialize: initializePlugin
};
