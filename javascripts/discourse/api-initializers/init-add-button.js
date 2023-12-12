// init-add-button.js
import { apiInitializer } from "discourse/lib/api";
import AddButton from "../components/add-button";

export default apiInitializer("0.8", api => {
  api.registerConnectorClass('after-create-topic-button', 'add-button', {
    setupComponent(args, component) {
      component.set('showAddButton', true);
    }
  });
});
