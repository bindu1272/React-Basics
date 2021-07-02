import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './Planets.scss';
import Planet from './Planet';
class Index extends Component {
    constructor() {
        super();
        this.state = {
            allPlanets: [],
            searchPlanets : []
        }
    }
    componentDidMount() {
        axios.get("https://assignment-machstatz.herokuapp.com/planet")
            .then(res => {
                this.setState({
                    allPlanets: res.data,
                    searchPlanets : res.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    addFavourite = (index, favourite) => {
        let planets = this.state.searchPlanets;
        console.log(planets);
        planets[index].isFavourite = favourite;
        this.setState({
            searchPlanets: planets
        })
    }
    searchPlanet = (event) => {
        let value = event.target.value;
        if(value == ""){
            this.setState({
                searchPlanets : this.state.allPlanets 
            })
        }else{
            let filterData =
                this.state.searchPlanets.filter((planet) => {
                    return (
                        (planet.name && planet.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)
                    )
                })
            this.setState({
                searchPlanets : filterData
            })
        }
    }
    render() {
        console.log(this.state.searchPlanets[0],this.state.allPlanets[0])
        return (
            <Fragment>
                <div className="planets-container">
                    <div className="title">All Planets</div>
                    <div className="search">
                        <label className="searchlabel">Search</label>
                        <input className="searchfeild" onChange={this.searchPlanet} type="text" />
                    </div>
                    <div className="all-planets">
                        {
                            this.state.searchPlanets && this.state.searchPlanets.map((planet, index) => {
                                return !planet?.isFavourite && <Planet planet={planet} index={index} addFavourite={this.addFavourite} />
                            })
                        }
                    </div>
                </div>
                <div className="planets-container">
                    <div className="title">Favourite Planets</div>
                    <div className="all-planets">
                        {
                            this.state.searchPlanets && this.state.searchPlanets.map((planet, index) => {
                                return planet?.isFavourite && <Planet planet={planet} index={index} addFavourite={this.addFavourite} />
                            })
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Index;