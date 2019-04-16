import React, { Component } from 'react'
import dog from "./DogIcon.svg"
import "./Animal.css"
import AnimalManager from "../../modules/APIManager"

export default class AnimalList extends Component {
    render () {
            return (
                    <section className="animals content">
                    <h1>Our Adorable Animals</h1>
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" alt="dog icon"/>
                                {animal.name}
                                <button onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete</button>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}
