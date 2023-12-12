// init-add-button.js
import { apiInitializer } from "discourse/lib/api";
import AddButton from "../components/add-button";

export default apiInitializer("0.8", api => {
  api.decorateWidget('after-create-topic-button:after', helper => {
    if (helper.attrs.showAddButton) {
      return helper.attach('add-button');
    }
  });
});
