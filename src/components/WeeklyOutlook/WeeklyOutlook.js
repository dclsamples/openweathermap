import React from "react";
import Moment from "react-moment";

const WeeklyOutlook = (props) => {
	//this.setState({days: props.weeklyWeather});
	const days = Array.from(props.weeklyWeather);

	return (
		<div>
			{Object.keys(props.weeklyWeather).length !== 0 ? (
				<div id="weekly-outer-container">
					<div>
						<h3>Your Week's Outlook</h3>
						{console.log("DAILY: " + JSON.stringify(props.weeklyWeather[1]))}
					</div>
					<div id="days-of-week-container">
						{days.map((day, index) => (
							<div className="day-card" key={index}>
								<div className="day-label">
									<Moment unix format="dddd">
										{day.dt}
									</Moment>
								</div>

								<i className={`owf owf-${day.weather[0].id} owf-5x`}></i>

								<div>
									<Moment unix format="MMM D">
										{day.dt}
									</Moment>
								</div>
								<div>
									<hr />
									<div className="description">{day.weather[0].description}</div>
									<hr />
									<div className="high-low-label" style={{ float: "left" }}>
										HIGH
										<br />
										{Math.round(day.temp.max)}&deg;
									</div>
									<div className="high-low-label" style={{ float: "right" }}>
										LOW
										<br />
										{Math.round(day.temp.min)}&deg;
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			) : null}
		</div>
	);
};

export default WeeklyOutlook;
