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
    <div>
      <p>Search for Weather in any city</p>
      <Form action="/weather" method="Get">
        <input type="text" name="query" placeholder="Search Weather" />
        <input className="submit" type="submit" value="Search" />
      </Form>
      <Outlet />
    </div>
  );
}
