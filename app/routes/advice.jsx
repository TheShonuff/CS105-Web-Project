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
    <div>
      <div className="container">
        <img className="Guru" src="/images/Guru-solo.png" />
        <div className="Advice">
          <p>{data.slip.advice}</p>
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
