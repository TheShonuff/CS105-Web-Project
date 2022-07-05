import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Form } from "@remix-run/react";

import stylesUrl from "~/styles/weather.css";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

// export async function loader (){
//     const res = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, {
//         method:"GET",
//         params: {q: 'Chandler'},
//         headers:{'X-RapidAPI-Key': '3c45832633msh09a8875d98f0e01p1772cejsnf9ae2754cfbd',
//         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'}
//     })
//     return json(await res.json())
// }

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
