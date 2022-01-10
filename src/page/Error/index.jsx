import { Link } from 'react-router-dom';
import './style.css';


function Error(){
    return (<div className="notfound"><p>404 Page Not Found</p> <p><Link to='/'>Go back</Link></p> </div>)
}
export default Error