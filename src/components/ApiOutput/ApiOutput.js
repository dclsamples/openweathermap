import React from 'react';
import JSONPretty from 'react-json-pretty';

const ApiOutput = (props) => {
var JSONPrettyMon = require('react-json-pretty/dist/monikai');

   return (
		<div>
			{props.currentWeather.cod != null ?
				<div id="api-output" style={{width: '100%'}}>
					<div style={{textAlign: 'left', width: '33%', float: 'left', padding: '10px 10px 10px 10px'}}>
						<h2>1st Call</h2>
						<p><strong>Purpose: </strong><i>Get current weather conditions along with LAT &amp; LONG which are used to get the weekly outlook.</i></p>
						<JSONPretty id="json-pretty" data={props.currentWeather} theme={JSONPrettyMon}></JSONPretty>
					</div>
					<div style={{textAlign: 'left', width: '33%', float: 'left', padding: '10px 10px 10px 10px'}}>
						<h2>2nd Call</h2>
						<p><strong>Purpose: </strong><i>Get today's forecast along with upcoming 7 days (weekly outlook).</i></p>
						<JSONPretty id="json-pretty" data={props.weeklyWeather} theme={JSONPrettyMon}></JSONPretty>
					</div>
					<div style={{textAlign: 'left', width: '33%', float: 'left', padding: '10px 10px 10px 10px'}}>
						<h2>Things I Used</h2>
						<ul>
							<li>Visual Studio Code</li>
							<li>Terminal (I'm on a Mac)</li>
							<li>Node</li>
							<li>create-react-app</li>
							<li>OpenWeatherMap API</li>
							<li>OW Font Open Weather Fonts</li>
							<li>Moment (UNIX date formatting)</li>
							<li>Bootstrap</li>
							<li>JSONPretty (making that json easy on the eyes)</li>
							<li>Postman</li>
							<li>Custom CSS</li>
						</ul>
					</div>
				</div>
			: null
           }
		</div>
   )
}

export default ApiOutput;