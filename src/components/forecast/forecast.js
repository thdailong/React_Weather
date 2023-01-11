import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const Forecast = ({ data }) => {
    const WeekDays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const formatDate = (dateInput) => {
        const date = new Date(dateInput);
        const hours12Format =
            (date.getHours() % 12) +
            " " +
            (date.getHours() >= 12 ? "pm" : "am");
        return WeekDays[date.getDay()] + " - " + hours12Format;
    };

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img
                                        alt="Weather"
                                        className="icon-small"
                                        src={`icons/${item.weather[0].icon}.png`}
                                    />
                                    <label className="day">
                                        {formatDate(item.dt_txt)}
                                    </label>
                                    <label className="description">
                                        {item.weather[0].description}
                                    </label>
                                    <label className="minmax">
                                        {Math.round(item.main.temp_min)}°C /{" "}
                                        {Math.round(item.main.temp_max)}°C
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure}hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind speed: </label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea level: </label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feels like: </label>
                                    <label>
                                        {Math.round(item.main.feels_like)}°C
                                    </label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default Forecast;
