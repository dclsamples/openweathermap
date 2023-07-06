import React from "react";
import "./App.css";
import Weather from "./components/Weather/Weather";
import "moment-timezone";

console.log(process.env.REACT_APP_OPENWEATHERMAP_API_KEY);

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Dave's Quick &amp; Dirty Weather API App</h1>
			</header>
			<main className="main-container">
				<Weather />
			</main>
			<footer>App by Dave</footer>
		</div>
	);
}

export default App;
