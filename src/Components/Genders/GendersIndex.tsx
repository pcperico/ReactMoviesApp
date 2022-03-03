import { Link } from "react-router-dom";

export default function GendersIndex()
{
    return (
        <>
            <h3>Genders</h3>
            <Link to="/genders/create">Create Gender</Link>
        </>
    )
}