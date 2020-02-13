import renderFunctions from "./HTMLfactory.js";
import API from "./fetch.js";
import domFunctions from "./DOMhandler.js";

const events = {
  recordPOI() {
    const hiddenId = document.querySelector("#poiId");
    const unparsedPlaceId = document.querySelector("#poi--Country");
    const name = document.querySelector("#poi--Name");
    const description = document.querySelector("#poi--Description");
    const unparsedCost = document.querySelector("#poi--Cost");
    const review = document.querySelector("#poi--Review");
    const save = document.querySelector("#saveButton");

    save.addEventListener("click", event => {
      const placeId = parseInt(unparsedPlaceId.value);
      const cost = parseInt(unparsedCost.value);
      const newEntry = renderFunctions.objectifier(
        placeId,
        name.value,
        description.value,
        cost,
        review.value
      );

      if (hiddenId.value !== "") {
          newEntry.id = parseInt(hiddenId.value);
          API.editEntry(newEntry).then(() => {
              API.fetchPOI().then(domFunctions.putPOIOnDOM);
          })
      } else {
        API.saveNewEntry(newEntry).then(() => {
          API.fetchPOI().then(domFunctions.putPOIOnDOM);
        });
      }
    });
  },
  editPOI() {
    const poiLog = document.querySelector("#POIlog");
    poiLog.addEventListener("click", event => {
      if (event.target.id.startsWith("cardEdit")) {
        const cardToEdit = event.target.id.split("--")[1];

        const updateForm = entryId => {
          const poiId = document.querySelector("#poiId");
          const poiName = document.querySelector("#poi--Name");
          const poiDescription = document.querySelector("#poi--Description");
          const poiCost = document.querySelector("#poi--Cost");
          const poiReview = document.querySelector("#poi--Review");

          fetch(`http://localhost:3000/interests/${entryId}`)
            .then(resp => resp.json())
            .then(card => {
              poiId.value = card.id;
              poiName.value = card.name;
              poiDescription.value = card.description;
              poiCost.value = card.cost;
              poiReview.value = card.review;
            });
        };

        updateForm(cardToEdit);
      }
    });
  },
  deletePOI() {
    const poiLog = document.querySelector("#POIlog");
    poiLog.addEventListener("click", event => {
      if (event.target.id.startsWith("cardDelete--")) {
        const deleteButtonId = event.target.id;
        const deleteButtonArray = deleteButtonId.split("--");
        const entryToDelete = parseInt(deleteButtonArray[1]);

        API.deleteEntry(entryToDelete)
          .then(API.fetchPOI)
          .then(domFunctions.putPOIOnDOM);
      }
    });
  }
};

export default events;
