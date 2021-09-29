import { Link, withRouter } from 'react-router-dom';


const Menu = () => {

    return (
        <nav> 
            
            <ul>
                <li>
                    <Link to='/'>
                        HomePage
                    </Link>
                </li>
                <li>
                    <Link to='/games'>
                        GamePage
                    </Link>
                </li>
                <li>
                    <Link to='/aboutus'>
                        About Us
                    </Link>
            </li>

            </ul>

        </nav>

    )

}

export default Menu