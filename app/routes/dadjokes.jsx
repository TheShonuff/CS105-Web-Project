import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Form } from "@remix-run/react";

import stylesUrl from "~/styles/dadjokes.css";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export async function loader() {
  const RAPID_API_KEY = process.env.X_RAPID_API_KEY;
  const res = await fetch("https://dad-jokes.p.rapidapi.com/random/joke", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  });
  return json(await res.json());
}

export default function Dadjokes() {
  const data = useLoaderData();
  return (
    <div className="content">
      <div className="container">
        <div className="image">
          <img className="dadjoke-img" src="images/banana-man.png" />
          <p>
            "Banana" <a href="https://www.pngegg.com/en/png-oovtm">-pngEgg</a>{" "}
            license-{" "}
            <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC 4.0</a>
          </p>
        </div>
        <div className="content-container">
          <Form className="form" method="GET">
            <input id="submit" type="submit" value="Get Dad Joke" />
          </Form>
          <div className="joke-container">
            {/* <p>{data.body[0].setup}</p>
        <p>{data.body[0].punchline}</p> */}
            <div className="joke-results">
              <div className="setup">
                <p>{data.body[0].setup}</p>
              </div>
              <div className="punch">
                <p>{data.body[0].punchline}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="image">
          <img className="dadjoke-img" src="images/banana-man-flipped.png" />
          <p>
            "Banana" <a href="https://www.pngegg.com/en/png-oovtm">-pngEgg</a>{" "}
            license-{" "}
            <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC 4.0</a>
          </p>
        </div>
      </div>
    </div>
  );
}
