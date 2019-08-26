import React from 'react';
import DisplayUpdate from './DisplayUpdate';
import Header from './Header';
import SearchUpdate from './SearchUpdate';
import getWeatherUpdate from '../weatherUpdate.js';

export default class WeatherApp extends React.Component {
    state = {
        cityDetails: undefined,
        weatherUpdate: undefined,
        foundUpdate: undefined
    };
    getCityAndUpdate =  (city) => {
        if(!city) {
            return 'Enter a valid city name';
        }
        getWeatherUpdate(city)
            .then((response) => {
                this.setState(() => ({
                    ...response,
                    foundUpdate: true
                }));
            }).catch((e) => {
                this.setState(() => ({
                    cityDetails: undefined,
                    weatherUpdate: undefined,
                    foundUpdate: false
                }));
            });   
    };
    render () {
        return (
            <div className = "container">
                <div>
                    <Header title ="Weather Daily"/>
                    <SearchUpdate  getCityAndUpdate = {this.getCityAndUpdate}/>
                    {this.state.foundUpdate !== undefined && <DisplayUpdate 
                        weatherUpdate={this.state.weatherUpdate}
                        cityDetails={this.state.cityDetails}
                        foundUpdate={this.state.foundUpdate}
                    />}
                </div>
            </div>
        );
    }
}
