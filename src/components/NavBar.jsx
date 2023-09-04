import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } fo

const NavBar = () => {
    const {user} = useAuthContext()


    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>

            <span> Lavender Journal </span>
            {user ?(
                <div>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>
                        Logout
                    </button>
                </div>
            ):(
                <div>
                    <Link to="/api/login">Login</Link>
                    <Link to="/api/signup">Signup</Link>
                </div>
            )}

        </header>
    )
}

export default NavBar