import { useState } from "react";
import axios from "axios"
function App() {

const [city,setcity] = useState("") 
const [weather,setweather]=useState("")
const [temp,settemp]=useState("")
const [desc,setdesc]=useState("")


function handlecity(evt)
{
  setcity(evt.target.value)
}
function getweather()
{
var weatherdata=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b3982b58370c1660f39805e1d054e12c`)
weatherdata.then(function(success){
  console.log(success.data)
  setweather(success.data.weather[0].main)
  setdesc(success.data.weather[0].description)
  settemp(success.data.main.temp)

})
}
  return (
    <div className="bg-black p-20">
      <div className="bg-green-700 p-10 rounded-md">
        <h1 className="text-2xl font-medium">Weather Report</h1>
        <p>I can give you a weather report about your city :)</p>
        <input onChange={handlecity} type="text" className="mt-2 p-2 border border-black rounded-md" placeholder="Enter city"></input>
        <br></br>
        <button onClick={getweather} className="bg-black text-white p-2 rounded-md mt-2">Get Report</button>
        <div className="mt-2">
          <h1><b>Weather: </b>{weather}</h1>
          <p><b>Temperature: </b>{temp}</p>
          <p><b>Description: </b>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
