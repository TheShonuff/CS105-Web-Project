import stylesUrl from "~/styles/index.css";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export default function Index() {
  return (
    <div className="Container">
      <h1>CIS105 Remix WebPage</h1>
      <div className="IndexNav">
        <ul className="IndexList">
          <li className="link-list">
            <a href="/dadjokes" rel="noreferrer">
              Dad Jokes
            </a>
          </li>
          <li className="link-list">
            <a href="/advice" rel="noreferrer">
              Get Advice
            </a>
          </li>
          <li className="link-list">
            <a href="/game" rel="noreferrer">
              Game
            </a>
          </li>
          <li className="link-list">
            <a href="/weather" rel="noreferrer">
              Weather
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
