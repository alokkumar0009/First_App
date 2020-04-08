	console.log('utlis.js is loaded')
	
	//----------------------------------------
	
	if(document.getElementById("envs").value == "Select")
	{
		document.getElementById("4").style.display = "none"
	}

	document.getElementById("envs").onchange=function() {
     document.getElementById("4").style.display = ""
	 const getCompValue = document.getElementById("envs").value
	 console.log(getCompValue)
    }
	

	//---------------------------------------

const formaddress = document.querySelector('form')

formaddress.addEventListener('submit', (e) => {
	
	e.preventDefault()
	
	
	const locationvalue = document.querySelector('input').value
	console.log(locationvalue)
	

	fetch('http://localhost:3000/weather?address=' +locationvalue).then((response)=> {
	
	response.json().then((data)=> {
		if(data.error)
		{
			console.log('Please provide a correct location')
		}
		else{
		console.log('Outside temperature is ' + data.Temperature)
		console.log('There is ' + data.Rainprobablity+ ' % chance of Rain')
		console.log(data.summary)
		
		document.getElementById('message-1').innerHTML = 'Outside temperature is ' + data.Temperature
		document.getElementById('message-2').innerHTML =  'There is ' + data.Rainprobablity+ ' % chance of Rain'
		}
	})
})


})

