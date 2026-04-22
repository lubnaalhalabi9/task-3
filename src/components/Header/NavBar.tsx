import { useState } from 'react';
import { NavLink } from "react-router-dom";
import Logo from '/assets/LittleLearners.png'
import { HiMiniBars3BottomRight } from "react-icons/hi2";

interface LinkItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface NavBarProps {
  logo?: string | React.ReactNode;
  items?: LinkItem[]; 
  btn?: {
    content: string;
    path: string;
  };
}

const defaultLinksData: LinkItem[] = [
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/about' },
  { name: 'Academics', link: '/academics' }, 
  { name: 'Admissions', link: '/admission' },
  { name: 'Student Life', link: '/student-life'},
  { name: 'Contact', link: '/contact' },
]

const NavBar = ({ logo, items, btn }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const navItems = items || defaultLinksData;

  const getLinkClass = (index: number, lastIndex: number) => {
    return ({ isActive }: { isActive: boolean }) => {
      let linkClass = "";
      
      if (index === lastIndex) {
        linkClass = "last-link";
        if (isActive) linkClass += " active-link";
      }
      else if (isActive) { 
        if (index === 0) {
          linkClass = "active-first-link"; 
        } else {
          linkClass = "active-link";
        }
      } 
      else if (index === 0) {
        linkClass = "first-link";
      }
      else {
        linkClass = "middle-link";
      }
      
      return linkClass;
    };
  };

  return (
    <div className="nav-bar">
      <div className='nav-logo'>
        <NavLink to="/">
          {logo ? (
            typeof logo === 'string' ? <h1>{logo}</h1> : logo
          ) : (
            <img src={Logo} alt="Logo" />
          )}
        </NavLink>
      </div>
      
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <HiMiniBars3BottomRight />
      </div>

      <div className={`links-container ${isOpen ? "open" : ""}`}>
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            className={getLinkClass(i, navItems.length - 1)}
            to={item.link}
            end={i === 0}
            onClick={() => setIsOpen(false)}
          >
            {item.icon && <span className="nav-icon">{item.icon}</span>}
            {item.name}
          </NavLink>
        ))}
        
        {btn && (
          <button className="nav-btn">
            <NavLink to={btn.path}>
              {btn.content}
            </NavLink>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;