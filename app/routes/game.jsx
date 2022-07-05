import { useLoaderData } from "@remix-run/react";
import stylesUrl from "~/styles/game.css";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export default function Game() {
  return (
    <div className="container">
      <iframe
        id="TicTacToe"
        title="Tic Tac Toe"
        width="600"
        height="800"
        src="https://silly-biscochitos-d897d1.netlify.app/"
      />
    </div>
  );
}
