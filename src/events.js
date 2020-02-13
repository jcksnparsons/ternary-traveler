import renderFunctions from "./HTMLfactory.js";
import API from "./fetch.js";
import domFunctions from "./DOMhandler.js";

const events = {
  recordPOI() {
    const unparsedPlaceId = document.querySelector("#poi--Country");
    const name = document.querySelector("#poi--Name");
    const description = document.querySelector("#poi--Description");
    const unparsedCost = document.querySelector("#poi--Cost");
    const review = document.querySelector("#poi--Review");
    const save = document.querySelector("#saveButton");

    save.addEventListener("click", event => {
      const placeId = parseInt(unparsedPlaceId.value)
      const cost = parseInt(unparsedCost.value)
      const newEntry = renderFunctions.objectifier(
        placeId,
        name.value,
        description.value,
        cost,
        review.value
      );

      API.saveNewEntry(newEntry).then(() => {
        API.fetchPOI().then(domFunctions.putPOIOnDOM);
      });
    });
  }
};

export default events;