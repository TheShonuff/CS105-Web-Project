import { Link } from "@remix-run/react";

export default function Toolbar() {
    return (
        <>
        <Link to={"/"} prefetch="none">
            Home
        </Link>
        </>
    )
}