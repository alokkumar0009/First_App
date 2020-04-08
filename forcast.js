
const request = require('request')

const forcast = (longitude, latitude, callback) =>{
	
	const url = 'https://api.darksky.net/forecast/1939745d5b47fda9123814eb7950a06d/'+longitude+','+latitude+'?units=si'
	
	request({url:url, json:true},(error, response)=>{
		if(error){
			callback('unable to connect to weather service', undefined)
		}
		else if(response.body.error){
			callback('Please provide valid Long/Lat combination', undefined)
		}
		else{
			callback(undefined, 
				{
				Temperature: response.body.currently.temperature,
				Rainprobablity: response.body.currently.precipProbability,
				summary: response.body.currently.summary,
				windSpeed: response.body.currently.windSpeed
				})
		}
			
		
	})
	
}

module.exports = forcast