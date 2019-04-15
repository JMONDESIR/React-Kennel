import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owner/OwnersList'


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker", dob: "Feb 17, 1985" },
        { id: 2, name: "Joel Mondesir", dob: "Jan 5, 1980" },
        { id: 3, name: "Jordan Nelson", dob: "Dec 3, 1983" },
        { id: 4, name: "Zoe LeBlanc", dob: "Sep 10, 1987" },
        { id: 5, name: "Blaise Roberts", dob: "Dec 18, 1979" },
        { id: 6, name: "Amanda Lopez", dob: "Jun 9, 1981" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Burger" },
        { id: 2, name: "Baby" },
        { id: 3, name: "Bouncer" },
        { id: 4, name: "Bigtime" },
        { id: 5, name: "Bankjob" },
        { id: 6, name: "Babyface" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Fenton Crackshell" },
        { id: 2, name: "Donald Duck" },
        { id: 3, name: "Scrooge McDuck" },
        { id: 4, name: "Magica De Spell" }
    ]
    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews