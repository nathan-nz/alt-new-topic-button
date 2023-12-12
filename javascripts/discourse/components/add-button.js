import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class AddButtonComponent extends Component {
  @service router;

  newTopicUrl = "https://ehealthforum.nz/w/ws-new-topic";

  @action
  goToNewTopic() {
    window.location.href = this.newTopicUrl;
  }
}
