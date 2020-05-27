import React from 'react';
import './App.css';
import Weather from "./components/Weather/Weather";
import 'moment-timezone';

console.log(process.env.REACT_APP_OPENWEATHERMAP_API_KEY)

function App() {
  /*let [responseData, setResponseData] = React.useState(''); 
  React.useEffect(() => {
    //setResponseData('BOOM')
 
    axios({
      "method": "GET",
      "url": "https://api.openweathermap.org/data/2.5/forecast?id=520637",
      "headers": {
        //"content-type": "application/octet-stream",
        //"x-rapidapi-host": "quotes15.p.rapidapi.com",
        //"x-rapidapi-key": process.env.REACT_APP_API_KEY
      }, "params": {
        "APPID": process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
        "q": "pittsburgh"
        //"language_code": "en"
      }
    })
    .then((response) => {
      setResponseData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

    console.log(responseData)
  }, 
  [setResponseData, responseData])
  */

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dave's Quick &amp; Dirty Weather API App</h1>
      </header>
      <main className="main-container">
        <Weather />
      </main>
      <footer>
        &copy; David C Lewetag II
      </footer>
    </div>
  );
}

export default App;
