const API = {
  fetchPOI() {
    return fetch("http://localhost:3000/interests?_expand=place").then(resp =>
      resp.json()
    );
  },
  saveNewEntry(newEntry) {
    return fetch("http://localhost:3000/interests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEntry)
    });
  },
  editEntry(entry) {
    return fetch(`http://localhost:3000/interests/${entry.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(entry)
    })
      .then(resp => resp.json())
      .then(() => {
        document.querySelector("#poiId") = "";
      });
  },
  deleteEntry(entryId) {
    return fetch(`http://localhost:3000/interests/${entryId}`, {
      method: "DELETE"
    });
  }
};

export default API;
