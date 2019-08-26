import React from 'react';
export default class SearchUpdate extends React.Component {
    state = {
        error : undefined
    }
    getLocation = (e) => {
        e.preventDefault();

        // split and join will make the query uniform and provide better search result
        // Eg: "Indrangar, Kolkata" or "Indrangar,Rajasthan" =>  "Indrangar Rajasthan"
        const city = e.target.elements.city.value.trim().split(",").join(" ");
        const error = this.props.getCityAndUpdate(city);
        this.setState(() =>  ( { error } ) ); //same as error: error
        if(!error) {
            e.target.elements.city.value = '';  
        }
    }
    render () {
        return (
            <div>
                <form className="search-city" onSubmit = {this.getLocation}>
                    <input className="search-city__input" type="text" name="city" placeholder="Enter city to get weather update"/>
                </form>
                {this.state.error && <p className="search-city-error">{this.state.error}</p>}
            </div>
        );
    }
}