import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class AddButtonComponent extends Component {
  @service router;

  get showAddButton() {
    let alternativeLinks = JSON.parse(Discourse.SiteSettings.alternative_links);
    let currentCategory = this.router.currentRoute.params.category;

    // Check if the current category is in the list of specified categories
    return alternativeLinks.some(link => link.category === currentCategory);
  }

  get buttonData() {
    let alternativeLinks = JSON.parse(Discourse.SiteSettings.alternative_links);
    let currentCategory = this.router.currentRoute.params.category;

    // Get the data for the button in the current category
    return alternativeLinks.find(link => link.category === currentCategory);
  }

  @action
  goToNewTopic() {
    window.location.href = this.buttonData.url;
  }
}
