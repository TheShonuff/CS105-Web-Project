import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/toolbar.css";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export function Footer() {
  return (
    <>
      <div id="footer">
        <p>Created by: Joe Irvine</p>
        <p>
          <a href="https://www.joeirvine.com/">Blog</a>
        </p>
        <p>
          <a href="https://github.com/TheShonuff">Github</a>
        </p>
        <p>
          {" "}
          <a href="https://twitter.com/TheDevShonuff">Twitter</a>
        </p>
      </div>
    </>
  );
}

export function Toolbar() {
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
