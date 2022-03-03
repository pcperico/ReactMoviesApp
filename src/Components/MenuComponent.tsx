import {NavLink} from 'react-router-dom';
export default function MenuComponent()
{
    const activeClass="active";
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" activeClassName={activeClass}> React Movies</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies/filter" activeClassName={activeClass} >Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/genders" activeClassName={activeClass} >Genders</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/actors" activeClassName={activeClass} >Actors</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}