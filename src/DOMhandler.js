import renderFunctions from "./HTMLfactory.js"

const domFunctions = {
    putPOIOnDOM(arr) {
        const container = document.querySelector("#POIlog");
        container.innerHTML = "";
        arr.forEach(taco => {
            container.innerHTML += renderFunctions.makePOICard(taco)
        })
    }
}

export default domFunctions;