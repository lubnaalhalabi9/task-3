// Sections: Hero (with contact links grid) | Contact Form (with social icons)

import Title from "../components/OurBenefits/Title"
import PageHero from "../components/PageHero/PageHero"
import ContactForm from "../components/ContactForm/ContactForm"
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"

// Contact info links shown in PageHero
const contactLinks = [
  { icon: <FaEnvelope />,     text: "hello@littlelearners.com" },
  { icon: <FaPhoneAlt />,     text: "+91 91813 23 2309" },
  { icon: <FaMapMarkerAlt />, text: "Somewhere in the World" },
  { icon: <FaClock />,        text: "Office Hours - 9am - 6 pm" },
]

// Social icons shown above the form card
const formSocials = [
  { icon: <FaFacebook /> },
  { icon: <FaTwitter /> },
  { icon: <FaLinkedin /> },
]

// Form fields: input/email/select/textarea - rendered dynamically
const formFields = [
  { 
    name: "parentName",  
    label: "Parent Name",        
    placeholder: "Enter Parent Name" 

  },
  { 
    name: "email",       
    label: "Email Address",       
    placeholder: "Enter Email Address",  
    type: "email" 

  },
  {
    name: "phone",       
    label: "Phone Number",        
    placeholder: "Enter Phone Number" 
  },
  { 
    name: "studentName", 
    label: "Student Name",        
    placeholder: "Enter Student Name" 

  },
  { 
    name: "studentAge",  
    label: "Student Age",         
    placeholder: "Enter Student Age" 

  },
  { 
    name: "program",     
    label: "Program of Interest", 
    placeholder: "Select Program",
    options: ["Nursery", "Pre-Kindergarten", "Kindergarten"] 
  },
  { 
    name: "message",     
    label: "Message",             
    placeholder: "Enter your Message", 
    type: "textarea", 
    full: true 

  },
]

const Contact = () => {
  return (
    <>
      <PageHero
        squareText="Contact Us"
        title="Feel Free To Connect With Us"
        description="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
        links={contactLinks}
      />

      <div>
        <Title
          squareText="Contact Form"
          title="Student Information"
          paragraph="If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"
        />
        <ContactForm fields={formFields} socials={formSocials} />
      </div>
    </>
  )
}

export default Contact
