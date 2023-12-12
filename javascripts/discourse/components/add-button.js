// add-button.js
import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class AddButtonComponent extends Component {
  constructor() {
    super(...arguments);
    console.log('AddButton component has been constructed');
  }

  newTopicUrl = "https://ehealthforum.nz/w/ws-new-topic";

  @action
  goToNewTopic() {
    window.location.href = this.newTopicUrl;
  }
}
