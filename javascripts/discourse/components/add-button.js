import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class AddButtonComponent extends Component {
  @service settings;

  get showAddButton() {
    let alternativeLinks = JSON.parse(this.settings.alternative_links);
    let currentCategory = this.args.category;

    return alternativeLinks.some(link => link.category === currentCategory);
  }

  get buttonData() {
    let alternativeLinks = JSON.parse(this.settings.alternative_links);
    let currentCategory = this.args.category;

    return alternativeLinks.find(link => link.category === currentCategory);
  }

  @action
  goToNewTopic() {
    window.location.href = this.buttonData.url;
  }
}
