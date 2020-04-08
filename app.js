const path = require('path')

const express = require('express')

//https://alok-weather-app.herokuapp.com/
//https://git.heroku.com/alok-weather-app.git

const app = express()

const request = require('request')

const geocode = require('./geocode')

const forcast = require('./forcast')

//define paths for express config

const pathdir = path.join(__dirname,'/Public')

console.log(pathdir)

//const viewspath = path.join(__dirname, '/template')


//setup handlebars engine and views

app.set('view engine','hbs')

//app.set('views', viewspath)


//setup static files

app.use(express.static(pathdir))


app.get('',(req,res)=>{

res.render('index',{
title: 'Root path',
name: 'Alok Kumar'
})

})

app.get('/about',(req,res)=>{

res.render('about',{
title: 'about me',
name: 'Alok Kumar'

})
})

app.get('/help',(req,res)=>{
res.render('help',{
title:'help page',
help:'This page will help u'
})
})


app.get('/weather',(req,res)=>{
	
	if(!req.query.address){
	return res.send({
	error: 'please provide address'})
	}
	
	geocode(req.query.address,(error,data)=>{
   
		if(error){
	   
		 return console.log(error)
		}
		const placename = data.location
		forcast(data.longitude,data.latitude, (error, data)=>{
		if(error)
		{
		return console.log(error)
		}
		res.send(data)
		}
		)
   	}
	)
	
})

app.get('/env',(req,res) =>{
	
	console.log(req.query.comp)
	res.send({Env: 'Public sector'})
}
)

app.listen(3000, () => {
console.log('server is up and running')

})