const renderFunctions = {
  makePOICard(placeOfInterest) {
    return `<div class="poiCard id="poi--${placeOfInterest.id}">
        <h2 id="poi--name">${placeOfInterest.name}</h2>
        <h3 id="poi--country">${placeOfInterest.place.name}</h3>
        <p id="poi--description"><em>${placeOfInterest.description}</em></p>
        <p id="poi--cost">$ ${placeOfInterest.cost}</p>
        <p id="poi--review">${placeOfInterest.review}<p>
        <div class="buttonDiv">
        <button id="cardEdit--${placeOfInterest.id}">Edit</button>
        <button id="cardDelete--${placeOfInterest.id}">Delete</button>
        </div>
        </div>
        `;
  },
  objectifier(placeId, name, description, cost, review) {
    return {
      placeId,
      name,
      description,
      cost,
      review
    };
  }
};

export default renderFunctions;
