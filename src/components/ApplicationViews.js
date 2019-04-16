import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owner/OwnersList'
import APIManager from "../modules/APIManager"


class ApplicationViews extends Component {

        state = {
                locations: [],
                animals: [],
                employees: [],
                owners: []
        }

        componentDidMount() {
                const newState = {}

                APIManager.getAnimals()
                        .then(animals => newState.animals = animals)
                APIManager.getEmployees()
                        .then(employees => newState.employees = employees)
                APIManager.getLocations()
                        .then(locations => newState.locations = locations)
                APIManager.getOwners()
                        .then(owners => newState.owners = owners)
                        .then(() => this.setState(newState))
        }

        render() {
                return (
                        <React.Fragment>
                                <Route exact path="/" render={(props) => {
                                        return <LocationList locations={this.state.locations} />
                                }} />
                                <Route exact path="/animals" render={() => {
                                        return <AnimalList deleteAnimal={this.deleteAnimal}
                                                animals={this.state.animals} />
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