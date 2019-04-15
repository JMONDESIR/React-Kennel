import React, { Component } from 'react'

export default class AnimalList extends Component {
        render() {
                return (
                        <section className="animals content">
                                {
                                        this.props.animals.map(animals =>
                                                <div key={animals.id}>
                                                        {animals.name}
                                                </div>
                                        )
                                }
                        </section>
                )
        }
}
