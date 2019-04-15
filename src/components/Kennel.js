import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList";
import "./Kennel.css"


class Kennel extends Component {

        employeesFromAPI = [
                { id: 1, name: "Jessica Younker", dob: "Feb 17, 1985" },
                { id: 2, name: "Joel Mondesir", dob: "Jan 5, 1980" },
                { id: 3, name: "Jordan Nelson", dob: "Dec 3, 1983" },
                { id: 4, name: "Zoe LeBlanc", dob: "Sep 10, 1987" },
                { id: 5, name: "Blaise Roberts", dob: "Dec 18, 1979" },
                { id: 6, name: "Amanda Lopez", dob: "Jun 9, 1981" }
        ]

        animalsFromAPI = [
                { id: 1, name: "Buster" },
                { id: 2, name: "Bouncer" },
                { id: 3, name: "Daisy" },
                { id: 4, name: "Duke" },
                { id: 5, name: "Odin" },
                { id: 6, name: "Frig" }
        ]

        locationsFromAPI = [
                { id: 1, name: "Nashville North", address: "500 Circle Way" },
                { id: 2, name: "Nashville South", address: "10101 Binary Court" }
        ]

        state = {
                employees: this.employeesFromAPI,
                locations: this.locationsFromAPI,
                animals: this.animalsFromAPI
        }

        render() {
                return (
                        <article className="kennel">
                                <LocationList locations={this.state.locations} />
                                <EmployeeList employees={this.state.employees} />
                                <AnimalList animals={this.state.animals} />
                        </article>
                )
        }
}

export default Kennel