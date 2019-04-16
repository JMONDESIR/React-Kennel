const URL = "http://localhost:5002"

export default {
        get(id) {
                return fetch(`${URL}/animals/${id}`).then(e => e.json())
        },
        getAnimals() {
                return fetch(`${URL}/animals/`).then(e => e.json())
        },
        getEmployees() {
                return fetch(`${URL}/employees/`).then(e => e.json())
        },
        getLocations() {
                return fetch(`${URL}/locations/`).then(e => e.json())
        },
        getOwners() {
                return fetch(`${URL}/owners/`).then(e => e.json())
        },
        deleteAnimal(id) {
                return fetch(`${URL}/animals/${id}`, {
                        method: "DELETE"
                })
                .then(e => e.json())
        }
}