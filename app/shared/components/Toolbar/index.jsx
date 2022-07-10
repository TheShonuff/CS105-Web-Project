import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/toolbar.css";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export default function Toolbar() {
  return (
    <>
      <div id="toolbar">
        <ul className="toolbar-list">
          <li className="Nav-Link">
            <Link to={"/"} prefetch="none">
              <span className="link">Home</span>
            </Link>
          </li>
          <li className="Nav-Link">
            <Link to={"/dadjokes"} prefetch="none">
              <span className="link">Dad Jokes</span>
            </Link>
          </li>
          <li className="Nav-Link">
            <Link to={"/advice"} prefetch="none">
              <span className="link">Advice</span>
            </Link>
          </li>
          <li className="Nav-Link">
            <Link to={"/game"} prefetch="none">
              <span className="link">Game</span>
            </Link>
          </li>
          <li className="Nav-Link">
            <Link to={"/weather"} prefetch="none">
              <span className="link">Weather</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
