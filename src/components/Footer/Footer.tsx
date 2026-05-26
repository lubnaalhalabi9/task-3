// Used in: Root layout - wraps all pages
// Shows: logo + description + contact info | navigation links | legal + social icons

import './footer.css'
import Logo from "../../assets/images/LittleLearners.png"
import FooterContact from './FooterContact';
import FooterLink from './FooterLink';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import FooterLegal from './FooterLegal';
import SocialLink from './SocialLink';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const contactData =[
    {
       content:"hello@littlelearners.com" ,
       icon:<FaEnvelope />
    },
    {
       content:"+91 91813 23 2309" ,
       icon: <FaPhoneAlt />
    },
    {
       content:"Somewhere in the World" ,
       icon:<FaMapMarkerAlt />
    }
]

const linksData = [
    {
        title: "Home",
        texts: ["Features", "Our Testimonials", "FAQ"]
    },
    {
        title: "About Us",
        texts: ["Blog", "Our Mission", "Our Vission", "Awards and Recognitions", "History", "Teachers"]
    },
    {
        title: "Academics",
        texts: ["Special Features", "Gallery"]
    },
    {
        title: "Contact Us",
        texts: ["Information", "Map & Direction"]
    }
]

const legalData = ["Terms of Service" , "Privacy Policy" , "Cookie Policy"]

const socialData = [<FaFacebook /> , <FaTwitter /> , <FaLinkedin />]


const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
            <div className='footer-top'>
                <div className="left-container">
                    <div className='logo-and-description'>
                        <img src={Logo} alt="Little Learners Academy Logo" />
                        <div className='description'>
                            <p>
                                We believe in the power of play to foster creativity, problem-solving skills, and imagination.
                            </p>
                        </div>
                    </div>
                    <div className='contact-container'>
                        {contactData.map((data, index) => (
                            <FooterContact
                                key={index}
                                content={data.content}
                                Icon={data.icon}
                            />
                        ))}
                    </div>
                </div>
                <div className="right-container">
                    <div className='link-container'>
                        {linksData.map((link, index) => (
                                    <FooterLink
                                        key={index}
                                        title={link.title}
                                        texts={link.texts}
                                    />
                        ))}
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className="info-container">
                    <div className="footer-legal-container">
                        {legalData.map((text, index) => (
                            <FooterLegal 
                            key={index}
                            content = {text}  
                            isLast={index === legalData.length - 1}              
                            />
                        ))}
                    </div>
                    
                    <div className="social-container">
                        {socialData.map((item, index) => (
                            <SocialLink 
                            key={index}
                            icon = {item}                
                            />
                        ))}
                    </div>
                </div>
                <div className="copy-right">
                    <p>
                        Copyright © [2023] Little Learners Academy. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
