import { useLocation, useNavigate } from 'react-router-dom';
import './Header.css'

function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    function pathMatchRoute(route){
        if(route === location.pathname){
        return true;
        }
    }
  return (
    <header>
    <nav className="header">
   
      <div className="header--brand" onClick={()=>navigate("/")}>Contacts</div>
      <div className="header--links">
        { !pathMatchRoute("/") &&  
        <div className='header--link' onClick={()=>navigate("/")}>Home</div>
        }
      </div>
   
    </nav>
    </header>
  )
}

export default Header