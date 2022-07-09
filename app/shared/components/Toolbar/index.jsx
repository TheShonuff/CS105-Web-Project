import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/toolbar.css";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export default function Toolbar() {
  return (
    <>
      <div className="toolbar">
        <Link to={"/"} prefetch="none">
          <span className="link">Home</span>
        </Link>
      </div>
    </>
  );
}
