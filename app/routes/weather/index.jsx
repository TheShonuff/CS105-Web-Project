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
  const query = search.get("query");
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

export function WeatherPicker() {
  const data = useLoaderData();
  if (data.current.condition["text"] === "Overcast") {
    console.log("The weather is cloudy");
    return "cloudy";
  } else {
    console.log("The weather is clear");
    return "clear";
  }
}

export default function Index() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className={`weather-container ${WeatherPicker()}`}>
      <div className="container">
        <div className="temperature">
          <p>{data.current.temp_f}</p>
        </div>
        <h1>{data.location.name}</h1>
        <h3>State: {data.location.region}</h3>

        <p>Current Conditions: {data.current.condition["text"]}</p>
      </div>
    </div>
  );
}
