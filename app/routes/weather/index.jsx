import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

import stylesUrl from "~/styles/weather.css";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export async function loader({ request }) {
  const RAPID_API_KEY = process.env.X_RAPID_API_KEY;
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  let query = search.get("query");
  query = query === null ? "Chandler" : search.get("query");
  const res = await fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
    {
      method: "GET",
      params: { q: "Chandler" },
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    }
  );
  return json(await res.json());
}

export default function Index() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="weather-container">
      <div className="content">
        <div className="intro">
          <p>
            Current Weather For: <br />
          </p>
          <div className="weather-header location">
            <h2>
              <span className="City">{data.location.name}</span>&nbsp;
              <span className="State">{data.location.region}</span>
            </h2>
            <img
              className="weather-icon"
              src={`${data.current.condition["icon"]}`}
            />
          </div>
        </div>
        <div className="temperature">
          <p>
            {data.current.temp_f}
            <span>&#176;</span>f
          </p>
        </div>
        <div className="additional-weather-info">
          <p>
            Wind Speed:{" "}
            <span className="data">{data.current.wind_mph} mph</span>
          </p>
          <p>
            Gust Speed:{" "}
            <span className="data">{data.current.gust_mph} mph</span>
          </p>
          <p>
            Wind Direction:{" "}
            <span className="data">{data.current.wind_dir}</span>
          </p>
          <p>
            Humidity: <span className="data">{data.current.humidity}</span>
          </p>
          <p>
            Feels Like:{" "}
            <span className="data">{data.current.feelslike_f}&#176;f</span>
          </p>
        </div>
        <p className="credit">
          weather provided by:{" "}
          <a href="https://www.weatherapi.com/">WeatherAPI.com</a>
        </p>
      </div>
    </div>
  );
}
