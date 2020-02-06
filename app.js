const path = require('path')

const express = require('express')

const app = express()

//define paths for express config

const pathdir = path.join(__dirname,'../Public')

const viewspath = path.join(__dirname, '/template')


//setup handlebars engine and views

app.set('view engine','hbs')

app.set('views', viewspath)




//setup static files
app.use(express.static(pathdir))

app.get('',(req,res)=>{

res.render('index',{
title: 'weather',
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
res.send({
location:'Newcastle',
temp: 30
})
})

app.listen(3000, () => {
console.log('server is up and runninggg')

})