// Used in: Footer (left column)
// Shows: icon + text for email, phone, location

import "./ContactItem.css";

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
}

const ContactItem = ({ icon, text, }: ContactItemProps) => {
  return (
    <div className= "contact-item">
      <span className="contact-item-icon">{icon}</span>
      <span className="contact-item-text">{text}</span>
    </div>
  );
};

export default ContactItem;
