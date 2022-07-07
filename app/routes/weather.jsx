import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Form } from "@remix-run/react";

import stylesUrl from "~/styles/weather.css";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export default function Weather() {
  // console.log(data)
  return (
    <div className="weather-container">
      <div className="weather">
        <Outlet />
        <Form id="form" action="/weather" method="Get">
          <input
            id="search"
            type="text"
            name="query"
            placeholder="Search Weather"
          />
          <input className="submit" type="submit" value="Search" />
        </Form>
      </div>
    </div>
  );
}
