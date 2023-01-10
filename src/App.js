import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/currentWeather/currentWeather";
import {
    Weather_APIKey,
    CurrentWeather_URL,
    ForecastWeather_URL,
} from "./components/api";
import { useState } from "react";

function App() {
    const [currentWeatherData, setCurrentWeatherData] = useState(null);
    const [forecastWeatherData, setforecastWeatherData] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");
        const currentWeatherFetch = fetch(
            `${CurrentWeather_URL}?lat=${lat}&lon=${lon}&appid=${Weather_APIKey}&units=metric`
        );
        const forecastWeatherFetch = fetch(
            `${ForecastWeather_URL}?lat=${lat}&lon=${lon}&appid=${Weather_APIKey}&units=metric`
        );
        Promise.all([currentWeatherFetch, forecastWeatherFetch])
            .then(async (response) => {
                const currentWeatherResponse = await response[0].json();
                const forecastWeatherResponse = await response[1].json();

                setCurrentWeatherData({
                    city: searchData.label,
                    ...currentWeatherResponse,
                });
                setforecastWeatherData({
                    city: searchData.label,
                    ...forecastWeatherResponse,
                });
            })
            .catch((err) => console.log(err));

        console.log(currentWeatherData);
        console.log(forecastWeatherData);
    };

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeatherData && <CurrentWeather data={currentWeatherData} />}
        </div>
    );
}

export default App;
