import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Form } from "@remix-run/react";

import stylesUrl from "~/styles/advice.css";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export async function loader() {
  const res = await fetch("https://api.adviceslip.com/advice", {
    method: "GET",
  });
  return json(await res.json());
}

export default function Advice() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="content">
      <div className="container">
        <div className="image">
          <img
            className="Guru"
            src="/images/Guru-solo.png"
            alt="Guru-Solo -Solo png@pngkey.com"
          />
          <p>
            "Guru-Solo"{" "}
            <a href="https://www.pngkey.com/maxpic/u2q8t4w7y3q8i1u2/">
              -pngKey
            </a>{" "}
            license-{" "}
            <a href="https://creativecommons.org/licenses/by-nc/4.0/">
              CC BY-NC 4.0
            </a>
          </p>
        </div>
        <div className="Advice">
          <p>"{data.slip.advice}"</p>
        </div>
      </div>
      <div className="NewAdvice">
        <Form method="GET">
          <button className="Btn" type="submit">
            New Advice
          </button>
        </Form>
      </div>
    </div>
  );
}
