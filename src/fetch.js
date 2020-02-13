const API = {
    fetchPOI() {
        return fetch("http://localhost:3000/interests?_expand=place").then(resp => resp.json())
    },
    saveNewEntry(newEntry) {
        return fetch("http://localhost:3000/interests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        });
    }
}

export default API