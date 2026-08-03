import { Link } from "react-router"

function Introduction () {

    return (
        <div>
            <h1>Introduction</h1>
            <Link to='/about_me'> Sobre mí</Link>
        </div>
    )
}

export default Introduction