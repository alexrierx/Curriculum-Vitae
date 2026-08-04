import { Link, useLocation } from "react-router";
import './styles/Header.css'

function Header() {

    const location = useLocation();

    return (
        <div className="header">
            <Link className="header-link" to='/'>Curriculum</Link>
            <div className="sections">
                <Link className={"header-link" + (location.pathname === '/work_experience' ? " active" : "")} to='/work_experience'>Experiencia laboral</Link>
                <Link className={"header-link" + (location.pathname === '/education' ? " active" : "")} to='/education'>Educación</Link>
                <Link className={"header-link" + (location.pathname === '/skills' ? " active" : "")} to='/skills'>Habilidades</Link>
                <Link className={"header-link" + (location.pathname === '/about_me' ? " active" : "")} to='/about_me'>Sobre mí</Link>
            </div>
        </div>
    )
}

export default Header