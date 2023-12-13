// add-button.js
import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class AddButtonComponent extends Component {
  newTopicUrl = "https://ehealthforum.nz/w/ws-new-topic";

  @action
  goToNewTopic() {
    window.location.href = this.newTopicUrl;
  }
}
