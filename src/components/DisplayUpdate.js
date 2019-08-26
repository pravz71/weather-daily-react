import React from 'react';
export default class DisplayUpdate extends React.Component {
	render () {
			const cityDetails = this.props.cityDetails;
			const weatherUpdate = this.props.weatherUpdate;
			let additionalClass = '';
			if(weatherUpdate) {
				additionalClass = weatherUpdate.IsDayTime ? "day" : "night";
			}
			
		
		if(!this.props.foundUpdate) {
			return (
				<p className="search-city-error">Please enter city followed by state</p>
			);
		}
		return (
	    	<div className = {`weather-update ${additionalClass}`}>
		    	<div className="weather-update__content">
		    		<h4>{cityDetails.EnglishName}</h4>
		    		<h4>{cityDetails.AdministrativeArea.EnglishName}</h4>
		    		<div className="weather-update__icon">
			    		<img src={`/images/icons/${weatherUpdate.WeatherIcon}.svg`}/>
			    	</div>
		    		<h5>{weatherUpdate.WeatherText}</h5>
		    		<p>{weatherUpdate.Temperature.Metric.Value }&deg;C</p>
		    	</div>
		    </div>
		);
	}
}
// <ol>
// 	<li>{cityDetails.EnglishName}</li>
// 	<li>{cityDetails.AdministrativeArea.EnglishName}</li>
// 	<li>{weatherUpdate.WeatherText}</li>
// 	<li>{weatherUpdate.IsDayTime ? "ha" : "na"}</li>
// 	<li>{weatherUpdate.Temperature.Metric.Value } &deg;C</li>
// 	<li></li>
// </ol>