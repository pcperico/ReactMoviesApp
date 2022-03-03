import { Link, Redirect } from "react-router-dom";

export default function RedirectComponent()
{
    return (
        <>
            <Redirect to={{pathname:"/"}} />
        </>
    )
}