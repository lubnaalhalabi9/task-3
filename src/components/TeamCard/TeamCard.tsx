// Used in: About page - Team Members section
// Shows: profile image + name + qualification + description + message icon

import './TeamCard.css'
import MessageIcon from '/assets/Message.png'

interface TeamProps {
  img: string;
  name: string;
  heading: string;
  paragraph: string;
}

const TeamCard = ({ img, name, heading, paragraph }: TeamProps) => {
  return (
    <div className='team-card'>
      <div className='personal-info'>
        <div className='img-name'>
          <div className='img'>
            <img src={img} alt="Our Team Member Photo" />
          </div>
          <p className='name'>{name}</p>
        </div>
        <div className='message-icon'>
          <img src={MessageIcon} alt="Message Icon" />
        </div>
      </div>
      <div className='personal-description'>
        <p className='upper-description'>{heading}</p>
        <p className='lower-description'>{paragraph}</p>
      </div>
    </div>
  )
}

export default TeamCard
