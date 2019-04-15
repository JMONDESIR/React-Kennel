import React, { Component } from 'react'

export default class AnimalList extends Component {
        render() {
                return (
                        <section className="animals">
                                {
                                        this.props.animals.map(animals =>
                                                <div key={animals.id}>
                                                        <h3>{animals.name}</h3>
                                                </div>
                                        )
                                }
                        </section>
                )
        }
}
