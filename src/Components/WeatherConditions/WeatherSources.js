import React,{Component} from 'react';
import axios from 'axios';
import './WeatherConditions.scss';
class WeatherSources extends Component{
    constructor(){
        super();
        this.state={
            weatherData : null,
            place : "",
            country : "",
            location : "",
            temparature : "",
            humidity : "",
            condition : ""
        }
    }
    getWeather=()=>{
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.place},${this.state.country}&appid=8ddceeacaf8b95fe943c88fc8389dee0&units=metric`)
        .then(res=>{
            this.setState({
                weatherData : res.data.name,
                location :  res.data.sys["country"],
                temparature : res.data.main["temp"],
                humidity : res.data.main["humidity"],
                condition : res.data.weather[0]["description"]
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }
    changeEvents=(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : value
        })
    }
    render(){
        return(
            <div className="main-template">
                <div className="inputData">
                    <div><input className="textfeild" type="text" value ={this.state.place} name="place" onChange={this.changeEvents}/></div>
                    <div><input className="textfeild" type="text" value={this.state.country} name = "country" onChange={this.changeEvents}/></div>
                    <div><button className='weather-button' onClick={this.getWeather}>Get Weather</button></div>
                </div>
                <div>
                    <h1>Location : {this.state.weatherData && this.state.location &&  `${this.state.weatherData} , ${this.state.location}`}</h1>
                    <h1>Temparature :{this.state.temparature}</h1>
                    <h1>Humidity : {this.state.humidity}</h1>
                    <h1>Condition : {this.state.condition} </h1>
                </div>
            </div>
        )
    }
}
export default WeatherSources;