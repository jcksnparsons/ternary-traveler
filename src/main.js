import API from "./fetch.js";
import domFunctions from "./DOMhandler.js";
import events from "./events.js";

API.fetchPOI().then(domFunctions.putPOIOnDOM);

events.recordPOI();
events.deletePOI();