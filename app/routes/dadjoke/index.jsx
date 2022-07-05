import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

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

export default function Index() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <p>{data.body[0].setup}</p>
      <p>{data.body[0].punchline}</p>
    </div>
  );
}
