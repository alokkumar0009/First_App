const request = require('request')

const geocode = (address, callback) =>{
	
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiYWxvazAwMDkiLCJhIjoiY2s0bjhrYWp6MG43cjNrbzVmNnQ2bXN1MiJ9.yaRUcHN4Im0RJYwUutU5IQ'
	
	request({url:url, json:true},(error, response)=>{
		if(error){
			callback('unable to connect to location service',undefined)
		}
		else if(!response.body.features[0]){
			callback('pllease provide correct location')
		}
		else{
			callback(undefined,{
				 longitude : response.body.features[0].center[1],
			     latitude : response.body.features[0].center[0],
				 location : response.body.features[0].place_name
			})
			
		}
	})
}
	
	
	module.exports = geocode